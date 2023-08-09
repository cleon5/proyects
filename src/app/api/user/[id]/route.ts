import { connectDb } from "../../../../utils/mongoose";
import User from "../../../../Models/User";
import { NextResponse } from "next/server";

export async function GET(
  request: any,
  { params }: { params: { id: string } }
) {
  connectDb();
  try {
    const userData = await User.findById(params.id);

    if (!userData)
      return new NextResponse(
        JSON.stringify({
          message: "Task not found",
        }),
        {
          status: 404,
        }
      );

    return new NextResponse(JSON.stringify(userData));
  } catch (error: any) {
    return new NextResponse(JSON.stringify(error.message), {
      status: 400,
    });
  }
}
