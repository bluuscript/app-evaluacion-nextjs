import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/model/db/route";
import Encuesta from "@/lib/model/Encuesta";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const userId = url.searchParams.get("userId");

  try {
    await connectDB();

    // Build the filter object only with valid parameters
    const filter: any = {};

    // Add to the filter only if id is valid and not an empty string
    if (id) {
      filter._id = id; // Mongoose will validate the ObjectId automatically
    }

    // Add to the filter only if userId is valid
    if (userId) {
      filter.userId = userId;
    }

    // Fetch the data based on the filter
    const data = await Encuesta.find(filter).limit(10).sort({ _id: -1 });

    return NextResponse.json({ data });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "Error al recuperar Encuesta",
        },
        {
          status: 500,
        },
      );
    }
  }
}
