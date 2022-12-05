import { Hotel } from "../models/hotelSchema.js";
import User from "../models/userSchema.js";

const addFavHotel = async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;
  try {
    const hotel = await Hotel.findById(id);
    const favHotels = await User.findOneAndUpdate(
      { name },
      {
        $addToSet: {
          favorites: hotel,
        },
      }
    );

    await favHotels.save();

    console.log(favHotels);

    res.json({
      favHotels,
    });
  } catch (error) {}
};

const removeFavHotel = async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;
  try {
    const updatedHotels = await User.findOneAndUpdate(
      { name },
      {
        $pull: {
          favorites: { _id: id },
        },
      }
    );
    await updatedHotels.save();

    if (updatedHotels) {
      return res.status(200).json({
        msg: "Hotel removido de favoritos exitosamente",
      });
    }
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export { addFavHotel, removeFavHotel };
