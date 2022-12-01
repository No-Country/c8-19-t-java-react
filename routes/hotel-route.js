import { Router } from "express";
import { getHotels, insertHotels } from "../controllers/hotel-controller.js";
const router = Router();

router.use("/insertHotels", insertHotels);

router.get("/", getHotels);

export default router;
