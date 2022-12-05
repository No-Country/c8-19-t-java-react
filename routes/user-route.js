import { Router } from "express";
import {
  getAllUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/user-controller.js";

const router = Router();

router.get("/:id", getUserById);

router.get("/", getAllUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
