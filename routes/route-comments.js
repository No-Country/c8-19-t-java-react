import { Router } from "express";
import { createComment } from "../controllers/comments-controller.js";
import handleErrors from "../middlewares/handleErrors.js";
import { verifyToken } from "../middlewares/verify-token.js";

const router = Router();

router.post("/:id", [verifyToken, handleErrors], createComment);

export default router;
