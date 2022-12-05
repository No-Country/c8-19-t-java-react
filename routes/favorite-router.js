import { Router } from "express";
import {
  addFavHotel,
  removeFavHotel,
} from "../controllers/favorite-controller.js";

const router = Router();

router.post("/:id", addFavHotel);

router.put("/:id", removeFavHotel);

export default router;
