// import hotels from "../data/hotels.js";
import { Hotel } from "../models/hotelSchema.js";

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
    const findHotel = await Hotel.findById(id).populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });

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

const filterHotels = async (req, res) => {
  const { rating, amount, min, max } = req.query;
  try {
    // const filters = {
    //   rating: Number(rating) || undefined,
    //   price: Number(price) || undefined,
    //   amount: Number(amount) || undefined,
    // };

    // let query = {};

    // if (rating) {
    //   query.rating = rating;
    // }

    // if (price) {
    //   query.price = Number(price);
    // }

    // const findHotels = await Hotel.find(query);

    const findHotels = await Hotel.find({
      rating: Number(rating),
      "rooms.amount": Number(amount) || undefined,
      price: {
        $lte: Number(max) || 100000,
        $gte: min || 0,
      },
    });

    res.json({
      findHotels,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const locationFilter = async (req, res) => {
  const { location } = req.query;

  try {
    const findLocation = await Hotel.find({ location });

    res.json({
      findLocation,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export {
  insertHotels,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
  filterHotels,
  locationFilter,
};
