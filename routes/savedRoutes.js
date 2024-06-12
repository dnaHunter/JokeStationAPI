import express from "express";
import { getSavedModel } from "../models/savedModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  const saved = getSavedModel();
  res.json(saved);
});

export default router;
