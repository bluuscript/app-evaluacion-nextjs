import connectDB from "@/lib/model/db/route";
import Encuesta from "@/lib/model/Encuesta";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {
    userId,
    nombreEncuesta,
    fechaInicio,
    fechaTermino,
    fechaCreacion,
    fechaContestada,
    encuestaContestada,
    pregunta1,
    pregunta2,
    pregunta3,
    pregunta4,
    pregunta5,
    pregunta6,
    pregunta7,
    pregunta8,
    pregunta9,
    pregunta10,
    pregunta11,
    pregunta12,
    pregunta13,
    pregunta14,
    pregunta15,
    pregunta16,
    pregunta17,
    pregunta18,
    pregunta19,
    pregunta20,
  } = await request.json();

  try {
    await connectDB();

    const nuevaEncuesta = new Encuesta({
      userId: userId,
      nombreEncuesta: nombreEncuesta,
      fechaInicio: fechaInicio,
      fechaTermino: fechaTermino,
      fechaCreacion: fechaCreacion,
      fechaContestada: fechaContestada,
      encuestaContestada: encuestaContestada,
      pregunta1: pregunta1,
      pregunta2: pregunta2,
      pregunta3: pregunta3,
      pregunta4: pregunta4,
      pregunta5: pregunta5,
      pregunta6: pregunta6,
      pregunta7: pregunta7,
      pregunta8: pregunta8,
      pregunta9: pregunta9,
      pregunta10: pregunta10,
      pregunta11: pregunta11,
      pregunta12: pregunta12,
      pregunta13: pregunta13,
      pregunta14: pregunta14,
      pregunta15: pregunta15,
      pregunta16: pregunta16,
      pregunta17: pregunta17,
      pregunta18: pregunta18,
      pregunta19: pregunta19,
      pregunta20: pregunta20,
    });

    const savedEncuesta = await nuevaEncuesta.save();

    return NextResponse.json({
      id: savedEncuesta._id,
      userId: savedEncuesta.userId,
      fechaInicio: savedEncuesta.fechaInicio,
      fechaTermino: savedEncuesta.fechaTermino,
      fechaCreacion: savedEncuesta.fechaCreacion,
    });
  } catch (error) {
    return new NextResponse(`Error al registrar Encuesta: ${error}`, {
      status: 500,
    });
  }
}
