import hotels from "../data/hotels.js";
import { Hotel } from "../models/hotelsSchema.js";

const insertHotels = async (req, res) => {
  const DBhotels = await Hotel.insertMany(hotels);
  res.status(200).json({
    DBhotels,
  });
};

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({});

    res.status(200).json({
      hotels,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const getHotel = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const findHotel = await Hotel.findById(id).populate("Comments");

    if (!findHotel)
      return res.status(404).json({
        msg: "El hotel solicitado no existe",
      });

    res.status(200).json({
      findHotel,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export { insertHotels, getHotels, getHotel };
