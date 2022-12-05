import hotels from "../data/hotels.js";
import { Hotel } from "../models/hotelsSchema.js";

const insertHotels = async (req, res) => {
  const { state, ...rest } = req.body;

    const hotelInDb = await Hotel.findOne({ title: rest.title });
  try {
    if (hotelInDb) {
      return res.status(400).json({
        msg: `El hotel ${rest.title} ya existe`,
      });
    }

    const data = {
      ...rest,
      title: rest.title.toLowerCase(),
    };

    const hotel = new Hotel(data);
    await hotel.save();

    res.status(200).json({
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
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
    const findHotel = await Hotel.findById(id);

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


const updateHotel = async (req, res) => {
  const { id } = req.params;

  const { state, ...rest } = req.body;

  const data = {
    ...rest,
  };

  try {
    const hotel = await Hotel.findByIdAndUpdate(id, data);
    res.status(202).json({
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};


const deleteHotel = async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findByIdAndDelete(id);
    res.status(204).json({
      msg: "el hotel fue eliminado correctamente",
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};


export { insertHotels, getHotels, getHotel, updateHotel, deleteHotel };
