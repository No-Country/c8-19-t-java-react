import hotels from "../data/hotels.js";
import { Hotel } from "../models/hotelsSchema.js";

const insertHotels = async (req, res) => {
  const DBhotels = await Hotel.insertMany(hotels);
  res.status(200).json({
    DBhotels,
  });
};

const getAllHotels = (req, res) => {
  res.json({
    msg: "hola mundo",
  });
};

export { insertHotels, getAllHotels };
