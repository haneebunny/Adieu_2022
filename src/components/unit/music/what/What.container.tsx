import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { MyInput, Wrapper } from "./What.styles";

export default function WhatMusic() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    name: "",
    url: "",
  });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  async function onClickSubmit() {
    console.log(inputs);
    const music = collection(getFirestore(firebaseApp), "music");
    await addDoc(music, {
      ...inputs,
    });
    alert("게시물 등록에 성공하였습니다!");
    router.push("/music/what");
  }

  return (
    <div>
      <Wrapper>
        <div>
          노래 제목: <MyInput id="name" type="text" onChange={onChangeInputs} />
        </div>
        <div>
          주소: <MyInput id="url" type="text" onChange={onChangeInputs} />
        </div>
        <div>
          <button onClick={onClickSubmit}>등록하기</button>
        </div>
      </Wrapper>
    </div>
  );
}
