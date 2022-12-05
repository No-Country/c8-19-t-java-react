import mongoose, { Schema, model } from "mongoose";
import { hotelSchema } from "./hotelSchema.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The user name is required"],
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "The password is requied"],
      unique: true,
    },
    picture: {
      type: String,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    favorites: {
      type: [hotelSchema],
    },
    state: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
