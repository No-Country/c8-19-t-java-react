import { Router } from "express";
import {
  getHotel,
  getHotels,
  // insertHotels,
} from "../controllers/hotel-controller.js";
const router = Router();

// router.use("/insertHotels", insertHotels);

router.get("/", getHotels);

router.get("/:id", getHotel);

export default router;
