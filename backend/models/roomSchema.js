import { Schema, model } from "mongoose";

export const roomSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  pictures: {
    type: [String],
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Room = model("Room", roomSchema);
