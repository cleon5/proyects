
import { connectDb } from "../../../utils/mongoose";
import Proyect from "../../../Models/Proyect";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  await connectDb();
  console.log(request);
  const data = await Proyect.find();
  console.log(data);
  return NextResponse.json(data);
}

async function VerifyNameEmail(name: String, email: String) {
  connectDb();
  const nameExist = (await Proyect.findOne({ Alias: name }))
    ? "Alias Existente"
    : null;
  const emailExist = (await Proyect.findOne({ Correo: email }))
    ? "Email Existente"
    : null;
  return nameExist ? nameExist : emailExist;
}

export async function POST(req: any) {
  await connectDb();
  try {
    const body = await req.json();
    const newProyect = new Proyect(body);
      const savedProyect = await newProyect.save();
      return NextResponse.json(savedProyect);

  } catch (error: any) {
    console.log(error);
    console.log(error.errors);
 
    return NextResponse.json(error.errors, {
      status: 400,
    });
  }
}
