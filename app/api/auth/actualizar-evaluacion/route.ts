import connectDB from "@/lib/model/db/route";
import Encuesta from "@/lib/model/Encuesta";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, respuesta: NextResponse) {
  const { idEncuesta, fechaContestada, encuestaContestada, pregunta1 } =
    await request.json();

  try {
    await connectDB();

    const preguntaEncuesta1 = {
      id: "pregunta1",
      pregunta: pregunta1.pregunta,
      tipo: pregunta1.tipo,
      opciones: pregunta1.opciones[0],
      respuesta: pregunta1.respuesta,
      respuestaCorrecta: pregunta1.respuestaCorrecta,
      puntaje: pregunta1.puntaje,
      correcta: pregunta1.correcta,
    };
    // Find the encuesta by id and userId
    const encuesta = await Encuesta.findOne({
      _id: idEncuesta,
    });

    if (!encuesta) {
      return new NextResponse(`No se encontró la encuesta: ${idEncuesta}`, {
        status: 404,
      });
    }

    // Update the encuesta fields
    const updatedEncuesta = await Encuesta.findOneAndUpdate(
      { _id: idEncuesta }, // Query to find the document
      {
        fechaContestada: fechaContestada,
        encuestaContestada: encuestaContestada,
        pregunta1: preguntaEncuesta1,
      },
      { new: true },
    );

    // Return the updated document as response
    return NextResponse.json({
      id: updatedEncuesta._id,
      userId: updatedEncuesta.userId,
      fechaInicio: updatedEncuesta.fechaInicio,
      fechaTermino: updatedEncuesta.fechaTermino,
      fechaCreacion: updatedEncuesta.fechaCreacion,
      fechaContestada: updatedEncuesta.fechaContestada,
      encuestaContestada: updatedEncuesta.encuestaContestada,
      pregunta1: updatedEncuesta.pregunta1,
    });
  } catch (error) {
    console.error("Error updating encuesta:", error);
    return new NextResponse(
      `Error al actualizar Encuesta: ${error as string}`,
      {
        status: 500,
      },
    );
  }
}
