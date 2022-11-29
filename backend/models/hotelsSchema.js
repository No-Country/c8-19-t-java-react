import mongoose, { Schema, model } from "mongoose";

const hotelSchema = new Schema({
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
  description: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  services: {
    type: Schema.Types.Mixed,
  },
  rooms: [roomSchema],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Hotel = model("Hotel", hotelSchema);
