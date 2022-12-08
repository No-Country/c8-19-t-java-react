// import hotels from "../data/hotels.js";
import { Hotel, Room } from "../models/hotelSchema.js";

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

const addRoomDates = async (req, res) => {
  const { hotelId, roomId } = req.params;
  const { date } = req.body;

  try {
    // const hotel = await Hotel.findByIdAndUpdate(id, {
    //   $push: { [`rooms[0].suite ejecutiva.unavailableDates`]: { date } },
    // });

    // const hotel = await Hotel.findById(hotelId);

    // console.log(hotel);

    const findRoom = hotel.rooms.find((room) => {
      return room._id === roomId;
    });

    const hotel = await Hotel.findByIdAndUpdate(id, {
      $push: { [`rooms.unavailableDates`]: date },
    });

    // const room = Room.findByIdAndUpdate(id, {
    //   $addToSet: {
    //     unavailableDates: date,
    //   },
    // });

    console.log(hotel);

    if (!hotel) {
      res.status(401).json({
        msg: "No se encontro niggun cuarto",
      });
    }

    res.status(200).json({
      msg: "Fechas reservadas con exito",

      hotel,
    });
  } catch (error) {}
};

export {
  insertHotels,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
  filterHotels,
  locationFilter,
  addRoomDates,
};
