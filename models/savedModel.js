import { json } from "express";
import fs from "fs";
import { readSaved } from "./utils/utils.js";

export function getSavedModel() {
 return readSaved();
}

export function postSavedModel(body) {
  const saved = readSaved();


  saved.push(body);
  

  const jsonSaved = JSON.stringify(saved);
  fs.writeFileSync(jsonSaved);

}
