import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "name is required" });
    return;
  }

  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/search`;

  const authToken = Buffer.from(
    `${process.env.API_KEY}:${process.env.API_SECRET}`
  ).toString("base64");

  try {
    const response = await axios.post(
      url,
      {
        expression: `filename:${name}`,
      },
      {
        headers: {
          Authorization: `Basic ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data.resources);
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    res.status(500).json({ message: "Failed to fetch images from Cloudinary" });
  }
}
