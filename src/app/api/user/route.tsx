import { connectDb } from "../../../utils/mongoose";
import User from "../../../Models/User";
import { NextResponse } from "next/server";


export async function GET(request:any) {
    await connectDb();
    console.log(request)
    const data = await User.find();
    console.log(data);
    return NextResponse.json( data );
}

export async function POST(req:any) {
    await connectDb();
    try {
        const body = await req.json();
        const newUser = new User(body);
        const savedUser = await newUser.save();
        return NextResponse.json(savedUser);
      } catch (error:any) {
        return NextResponse.json(error.message, {
          status: 400,
        });
      }  
}