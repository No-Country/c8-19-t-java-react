import { Router } from "express";
import { getAllHotels, insertHotels } from "../controllers/hotel-controller.js";
const router = Router();

router.use("/insertHotels", insertHotels);

router.get("/", getAllHotels);

export default router;
