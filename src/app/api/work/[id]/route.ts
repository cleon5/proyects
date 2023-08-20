import { connectDb } from "../../../../utils/mongoose";
import Work from "../../../../Models/Work";
import { NextResponse } from "next/server";

export async function GET(
  request: any,
  { params }: { params: { id: string } }
) {
  connectDb();
  try {
    const WorkData = await Work.findById(params.id);

    if (!WorkData)
      return new NextResponse(
        JSON.stringify({
          message: "Work not found",
        }),
        {
          status: 404,
        }
      );

    return new NextResponse(JSON.stringify(WorkData));
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
    const body = await request.json();
    console.log("put");

    const update = await Work.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    console.log(update);

    return NextResponse.json(update);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
