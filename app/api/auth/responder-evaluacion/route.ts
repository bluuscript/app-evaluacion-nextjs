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
    const newEncuesta = new Encuesta({
      //
    });

    // Guardar Encuesta
    const savedEncuesta = await newEncuesta.save({
      idEncuesta,
      fechaContestada: fechaContestada,
      encuestaContestada: encuestaContestada,
      pregunta1: preguntaEncuesta1,
    });

    // Return the updated document as response
    return NextResponse.json({
      id: newEncuesta._id,
      userId: newEncuesta.userId,
      fechaInicio: newEncuesta.fechaInicio,
      fechaTermino: newEncuesta.fechaTermino,
      fechaCreacion: newEncuesta.fechaCreacion,
      fechaContestada: newEncuesta.fechaContestada,
      encuestaContestada: newEncuesta.encuestaContestada,
      pregunta1: newEncuesta.pregunta1,
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
