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

export async function PUT(
  request: any,
  { params }: { params: { id: string } }
) {
  await connectDb();
  try {
    let body = await request.json();
    console.log(body)
    console.log('dasda')

    const update = await User.findByIdAndUpdate(params.id, body, {
      new: true
    });
    console.log(update);

    return NextResponse.json(
      update
    );
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
