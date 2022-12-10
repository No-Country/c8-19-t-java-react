import { Router } from "express";

import { createRoom, addRoomDates } from "../controllers/room-controller.js";

const router = Router();

router.post("/:id", addRoomDates);

router.post("/create/:id", createRoom);

export default router;
