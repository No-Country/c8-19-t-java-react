import { Router } from "express";
import { check } from "express-validator";
import {
    getAllUsers,
    getUser,
    removeUser,
    updateUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/:id", getUser);

router.get("/", getAllUsers);

router.put("/:id", updateUser);

router.delete("/:id", removeUser);

export default router;
