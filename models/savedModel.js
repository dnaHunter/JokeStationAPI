import { json } from "express";
import fs from "fs";
import { readSaved } from "./utils/utils.js";
import { v4 as uuid } from "uuid";

export function getSavedModel() {
  return readSaved();
}

export function postSavedModel(body) {
  const saved = readSaved();

  const newJoke = {
    setup: body.setup,
    category: body.category,
    delivery: body.delivery,
  };
  newJoke.id = uuid();

  saved.push(body);

  const jsonSaved = JSON.stringify(saved);
  fs.writeFileSync("./data/jokes.json", jsonSaved);
  return newJoke;
}
