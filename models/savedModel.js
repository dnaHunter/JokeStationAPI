import { json } from "express";
import fs from "fs";

export function getSavedModel() {
  const data = fs.readFileSync("./data/jokes.json");
  return JSON.parse(data);
}
