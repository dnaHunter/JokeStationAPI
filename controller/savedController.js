import { getSavedModel } from "../models/savedModel.js";

export function getSavedController(req, res) {
  const saved = getSavedModel();
  res.json(saved);
}

export function postSavedController(req, res){
  const body = JSON.parse(req.body);
  if(!body.setup || !body.catagory || !body.delivery){
    res.status(400).json({message:"Joke body needs a setup, a catagory and a delivery"})
  }

  const newSaved = postSavedController(body);
  res.status(201).json(newSaved);
}
