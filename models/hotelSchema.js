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
  },
  { timestamps: true }
);

export const Room = model("Room", roomSchema);

export const hotelSchema = new Schema({
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
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],

  services: {
    type: Schema.Types.Mixed,
  },
  rooms: [roomSchema],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  location: {
    type: String,
  },
});

export const Hotel = model("Hotel", hotelSchema);