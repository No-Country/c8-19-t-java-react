import mongoose, { Schema, model } from "mongoose";

const hotelCommentsSchema = new Schema(
  {
    hotel: {
      type: Schema.Types.ObjectId,
      ref: "Hotel",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default hotelComments = mongoose.model(
  "HotelComments",
  hotelCommentsSchema
);
