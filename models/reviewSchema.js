import { Schema, model } from "mongoose";

export const reviewSchema = new Schema(
  {
    username: {
      type: { type: Schema.Types.ObjectId, ref: "User" },
    },
    pictures: {
      type: [String],
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Room = model("Room", reviewSchema);
