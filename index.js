import express from "express";
import cors from "cors";
import "dotenv/config";
import savedRoutes from "./routes/savedRoutes.js";

const PORT = process.env.PORT;
const BACKEND_URL = process.env.BACKEND_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/saved", savedRoutes);

app.listen(PORT, () => {
  console.log(`Server is started on: http://${BACKEND_URL}:${PORT}`);
});
