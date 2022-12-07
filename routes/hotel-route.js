import { Router } from "express";
import {
  insertHotels,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
  filterHotels,
  locationFilter
} from "../controllers/hotel-controller.js";
const router = Router();

router.use("/insertHotels", insertHotels);

router.get("/", getHotels);

router.get("/filter", filterHotels);
router.get("/location", locationFilter);

router.get("/:id", getHotel);

router.post("/insertHotels", insertHotels);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

export default router;
