import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/model/db/route";
import User from "@/lib/model/User";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const USER_MAIL = "tomymilla22@gmail.com";
  const USER_PASS = "zjdr yvzi tqoz gcny";
  try {
    const { email } = await req.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: USER_MAIL,
        pass: USER_PASS,
      },
    });
    await connectDB();

    const userFound = await User.findOne({ email });

    if (userFound) {
      // Genera una nueva contraseña de 6 dígitos
      const newPassword = Math.floor(
        100000 + Math.random() * 900000,
      ).toString();

      transporter.sendMail({
        from: USER_MAIL,
        to: email,
        subject: "Contraseña temporal", // Reemplaza con el asunto que desees
        text: `Contraseña temporal ${newPassword}`, // Agrega el cuerpo del mensaje si es necesario
      });

      console.log(newPassword);
      // Actualiza la contraseña del usuario
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      userFound.password = hashedPassword;
      await userFound.save();

      return NextResponse.json({
        message: "Contraseña actualizada exitosamente.",
        data: {
          email: userFound.email,
          newPassword: newPassword, // Solo para propósitos de desarrollo. No se debe enviar la contraseña en producción.
        },
      });
    } else {
      return NextResponse.json(
        {
          message: "El usuario no existe.",
        },
        {
          status: 404,
        },
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error en BD",
      },
      {
        status: 500,
      },
    );
  }
}
