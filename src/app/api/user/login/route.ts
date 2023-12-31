import { connectDb } from "../../../../utils/mongoose";
import User from "../../../../Models/User";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  await connectDb();
  console.log(request);
  const data = await User.find();
  console.log(data);
  return NextResponse.json(data);
}

export async function POST(req: any) {
  await connectDb();
  try {
    const body = await req.json();

    const userFound = await User.findOne({
      Correo: body?.Correo,
    });

    return NextResponse.json(
      userFound.Password == body.Password ? userFound : "Error de datos"
    );
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
