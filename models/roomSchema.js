import mongoose, { Schema, model } from "mongoose";

const roomSchema = new Schema(
  {
    title: {
      type: String,
    },
    pictures: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
    },
    unavailableDates: { type: [Date] },
    hotel: {
      type: Schema.Types.ObjectId,
      ref: "Hotel",
    },
  },
  { timestamps: true }
);

export const Room = mongoose.model("Room", roomSchema);
