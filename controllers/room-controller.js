import { Hotel } from "../models/hotelSchema.js";
import { Room } from "../models/roomSchema.js";
import moment from "moment";

const createRoom = async (req, res) => {
  const { id } = req.params;
  const { title, pictures, price, amount } = req.body;
  try {
    const hotel = await Hotel.findById(id);

    const newRoom = new Room({
      title,
      pictures,
      price,
      amount,
    });

    const savedRoom = await newRoom.save();

    hotel.rooms = hotel.rooms.concat(savedRoom._id);

    await hotel.save();

    res.status(200).json({
      savedRoom,
      hotel,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const addRoomDates = async (req, res) => {
  const { id } = req.params;
  const { dates } = req.body;

  try {
    const getRangeDates = (startDate, endDate) => {
      let dates = [];

      const theDate = new Date(startDate);
      while (theDate < new Date(endDate)) {
        dates = [...dates, new Date(theDate)];
        theDate.setDate(theDate.getDate() + 1);
      }
      dates = [...dates, new Date(endDate)];
      return dates;
    };

    const range = getRangeDates(dates[0], dates[1]);

    const findRoom = await Room.findByIdAndUpdate(id, {
      $push: {
        unavailableDates: range,
      },
    });

    if (!findRoom) {
      res.status(401).json({
        msg: "No se encontro el hotel",
      });
    }

    await findRoom.save();

    res.status(200).json({
      msg: "Fechas agregadas",
      findRoom,
    });
  } catch (error) {
    res.status(400).json({
      error: "Algo salio mal",
    });
  }
};

export { createRoom, addRoomDates };
