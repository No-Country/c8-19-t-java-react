import express from "express";
import cors from "cors";
import connectDatabase from "./config/db-config.js";
import "dotenv/config.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

connectDatabase();

app.listen(PORT, () => {
  console.log(`base de datos escuchando al puerto ${PORT}`);
});
