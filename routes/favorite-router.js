import { Router } from "express";
import {
  addFavHotel,
  removeFavHotel,
} from "../controllers/favorite-controller.js";
import { getUserFavorites } from "../controllers/user-controller.js";

const router = Router();

router.get("/:id", getUserFavorites);

router.post("/:id", addFavHotel);

router.put("/:id", removeFavHotel);

export default router;
