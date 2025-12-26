// pages/api/generate-id.ts

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

// 🔥 하루 호출 제한 (200회 예시)
let callCount = 0;
let lastReset = Date.now();
const DAILY_LIMIT = 200;
const ONE_DAY = 24 * 60 * 60 * 1000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ✅ 키가 없으면 여기서 바로 JSON 에러 반환 (500 HTML 방지)
  if (!process.env.OPENAI_API_KEY) {
    return res
      .status(500)
      .json({ error: "서버에 OPENAI_API_KEY가 설정되어 있지 않습니다." });
  }

  // ✅ GET: 상태 체크 + 간단 응답
  if (req.method === "GET") {
    return res.status(200).json({ status: "ok", message: "generate-id alive" });
  }

  // ✅ POST만 실제 ID 생성 로직으로 보냄,
  //   그 외 메소드는 200 + 안내 문구 (405 아예 안 씀)
  if (req.method !== "POST") {
    return res.status(200).json({
      status: "noop",
      message: `이 엔드포인트는 보통 POST로만 사용됩니다. (받은 메소드: ${req.method})`,
    });
  }

  // 🔄 하루 리셋
  if (Date.now() - lastReset > ONE_DAY) {
    callCount = 0;
    lastReset = Date.now();
  }

  if (callCount >= DAILY_LIMIT) {
    return res.status(429).json({
      error: "오늘 아이디 생성 한도를 초과했어요. 내일 다시 시도해주세요!",
    });
  }

  callCount++;

  try {
    const { name, soulFood, otherAnswers } = req.body as {
      name?: string;
      soulFood?: string;
      otherAnswers?: string[];
    };

    const infoText = `
- 이름: ${name || ""}
- 소울푸드: ${soulFood || ""}
- 기타 답변: ${(otherAnswers || []).join(" / ")}
    `.trim();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "너의 역할은 사용자에게 어울리는 영어 기반 아이디를 만드는 것이다. 반드시 아이디만 출력하라.",
        },
        {
          role: "user",
          content: `
${infoText}

위 사람에게 어울리는 아이디 한 개를 만들어줘.

조건:
- 영어 소문자 + 숫자만
- 8~16자
- 음식/취향/이름 등을 자연스럽게 조합
- 예: tofukimchi1004, lattecat777
- 설명 없이 아이디만 출력
          `.trim(),
        },
      ],
      max_tokens: 20,
    });

    const rawText = completion.choices[0]?.message?.content?.trim() ?? "";

    if (!rawText) {
      console.error("빈 응답을 받았습니다:", completion);
      return res
        .status(500)
        .json({ error: "아이디를 생성하지 못했어요.(빈 응답)" });
    }

    let id = rawText
      .split(/\s+/)[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    if (id.length < 4) {
      id = `user${Math.floor(1000 + Math.random() * 9000)}`;
    }

    return res.status(200).json({ id });
  } catch (err: any) {
    console.error("ID 생성 실패:", err);
    return res
      .status(500)
      .json({ error: "Failed to generate ID", detail: err?.message });
  }
}
