import { connectDb } from "../../../../utils/mongoose";
import Proyect from "../../../../Models/Proyect";
import { NextResponse } from "next/server";

export async function GET(
  request: any,
  { params }: { params: { id: string } }
) {
  connectDb();
  try {
    const ProyectData = await Proyect.findById(params.id);

    if (!ProyectData)
      return new NextResponse(
        JSON.stringify({
          message: "Task not found",
        }),
        {
          status: 404,
        }
      );

    return new NextResponse(JSON.stringify(ProyectData));
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

    const update = await Proyect.findByIdAndUpdate(params.id, body, {
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
