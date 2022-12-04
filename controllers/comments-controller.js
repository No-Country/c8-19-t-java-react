import { Comment } from "../models/commentSchema.js";
import { Hotel } from "../models/hotelsSchema.js";
import User from "../models/userSchema.js";

const createComment = async (req, res) => {
  const { comment, rating } = req.body;
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);

    const newComment = new Comment({
      hotel: hotel._id,
      comment,
      rating,
      date: new Date(),
    });

    const savedComment = await newComment.save();

    hotel.comments = hotel.comments.concat(savedComment._id);

    await hotel.save();

    res.status(200).json({
      savedComment,
    });
  } catch (error) {}
};

export { createComment };
