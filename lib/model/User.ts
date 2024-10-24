import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "fullname is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    rol: {
      type: String,
      required: [true, "Rol de Usuario es requerido"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      select: false,
    },
  },
  {
    versionKey: false,
  },
);

const User = models.User || model("User", userSchema);
export default User;
