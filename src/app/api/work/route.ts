
import { connectDb } from "../../../utils/mongoose";
import Work from "../../../Models/Work";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  await connectDb();
  console.log(request);
  const data = await Work.find();
  console.log(data);
  return NextResponse.json(data);
}

export async function POST(req: any) {
  await connectDb();
  try {
    const body = await req.json();
    const newWork = new Work(body);
      const savedWork = await newWork.save();
      return NextResponse.json(savedWork);

  } catch (error: any) {
    console.log(error);
    console.log(error.errors);
 
    return NextResponse.json(error.errors, {
      status: 400,
    });
  }
}
