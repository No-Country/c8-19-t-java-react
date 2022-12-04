import express from "express";
import cors from "cors";
import connectDatabase from "./config/db-config.js";
import "dotenv/config.js";
import authRouter from "./routes/auth-route.js";
import hotelRouter from "./routes/hotel-route.js";
import userRouter from "./routes/user-route.js";
import commentsRouter from "./routes/route-comments.js";

const app = express();
connectDatabase();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/user", userRouter);
app.use("/api/:id/comments", commentsRouter);

app.listen(PORT, () => {
  console.log(`servidor escuchando al puerto ${PORT}`);
});
