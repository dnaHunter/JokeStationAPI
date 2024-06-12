import express from "express";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT;
const BACKEND_URL = process.env.BACKEND_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();

app.use(cors({ origin: FRONTEND_URL }));

app.listen(PORT, () => {
  console.log(`Server is started on: ${BACKEND_URL}:${PORT}`);
});
