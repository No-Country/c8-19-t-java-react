import { Schema, model } from "mongoose";

export const reviewSchema = Schema(
  {
    username: {
      type: { type: Schema.Types.ObjectId, ref: "User" },
      required: true,
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
