import { Router } from "express";
<<<<<<< HEAD
import { insertHotels, getHotels, getHotel, updateHotel, deleteHotel } from "../controllers/hotel-controller.js";
const router = Router();

=======
import {
  getHotel,
  getHotels,
  // insertHotels,
} from "../controllers/hotel-controller.js";
const router = Router();

// router.use("/insertHotels", insertHotels);
>>>>>>> 99819eb7d90c2084a4c98deca7e43bc4f96ab18f

router.get("/", getHotels);

router.get("/:id", getHotel);

<<<<<<< HEAD
router.post("/insertHotels", insertHotels);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

=======
>>>>>>> 99819eb7d90c2084a4c98deca7e43bc4f96ab18f
export default router;
