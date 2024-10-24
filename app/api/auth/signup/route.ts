import { NextResponse } from "next/server";
import connectDB from "@/lib/model/db/route";
import User from "@/lib/model/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { fullname, email, rol, password } = await request.json();

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: "User alrady exist",
        },
        {
          status: 409,
        },
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      fullname,
      email,
      rol,
      password: hashedPassword,
    });
    const savedUser = await user.save();

    return NextResponse.json({
      _id: savedUser._id,
      fullname: savedUser.fullname,
      email: savedUser.email,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "Error en BD",
        },
        {
          status: 400,
        },
      );
    }
  }
}
