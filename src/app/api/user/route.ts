import { connectDb } from "../../../utils/mongoose";
import User from "../../../Models/User";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  await connectDb();
  console.log(request);
  const data = await User.find();
  console.log(data);
  return NextResponse.json(data);
}

async function VerifyNameEmail(name: String, email: String) {
  connectDb();
  const nameExist = (await User.findOne({ Alias: name }))
    ? "Alias Existente"
    : null;
  const emailExist = (await User.findOne({ Correo: email }))
    ? "Email Existente"
    : null;
  return nameExist ? nameExist : emailExist;
}
export async function POST(req: any) {
  await connectDb();
  try {
    const body = await req.json();
    const newUser = new User(body);
      const savedUser = await newUser.save();
      return NextResponse.json(savedUser);

  } catch (error: any) {
    console.log(error);
    console.log(error.errors);
 
    return NextResponse.json(error.errors, {
      status: 400,
    });
  }
}
