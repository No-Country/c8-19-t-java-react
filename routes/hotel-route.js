import { Router } from "express";
import { insertHotels, getHotels, getHotel, updateHotel, deleteHotel } from "../controllers/hotel-controller.js";
const router = Router();


router.use("/insertHotels", insertHotels);

router.get("/", getHotels);

router.get("/:id", getHotel);

router.post("/insertHotels", insertHotels);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

export default router;
