import { getSavedModel } from "../models/savedModel.js";

export function getSavedController(req, res) {
  const saved = getSavedModel();
  res.json(saved);
}
