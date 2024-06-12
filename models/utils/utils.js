import fs from "fs";

export function readSaved() {
  const data = fs.readFileSync("./data/jokes.json");
  return JSON.parse(data);
}
