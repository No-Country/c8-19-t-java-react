import { Router } from "express";
import { signIn, signUp } from "../controllers/auth-controller.js";

const router = Router();

//Crear ruta de registro

router.post("/signUp", signUp);

//Crear ruta de login

router.post("/signIn", signIn);

export default router;
