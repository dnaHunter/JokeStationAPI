import { getSavedModel, postSavedModel } from "../models/savedModel.js";

export function getSavedController(req, res) {
  const saved = getSavedModel();
  res.json(saved);
}

export function postSavedController(req, res) {
  const body = req.body;

  console.log(body);
  if (!body.setup || !body.category || !body.delivery) {
    res
      .status(400)
      .json({ message: "Joke body needs a setup, a category and a delivery" });
  }

  const newSaved = postSavedModel(body);
  res.status(201).json(newSaved);
}
