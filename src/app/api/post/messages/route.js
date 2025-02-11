import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, message, datetime } = await req.json();

    const db = await connectDB();
    const collection = await db.collection("messages");

    const res = await collection?.insertOne({ email, message, datetime });

    if (res?.insertedId) {
      return NextResponse.json({
        ok: true,
        message: "Insertion successfull",
        data: res?.insertedId,
      });
    } else {
      return NextResponse.json({
        ok: false,
        message: "Insertion failed",
        data: res,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      ok: false,
      message: error?.message || "An error occurred",
      error,
    });
  }
}
