import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const db = await connectDB();
    const collection = db.collection("portfolio");

    let res;
    if (!id) {
      res = await collection?.find()?.toArray();
    } else {
      res = await collection?.findOne({ _id: new ObjectId(id) });
    }

    return NextResponse.json({
      ok: true,
      message: "Data fetched successfully",
      data: res,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      ok: false,
      message: error?.message || "An error occurred",
      error,
    });
  }
}
