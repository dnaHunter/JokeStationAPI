import express from "express";
import { getSavedController } from "../controller/savedController.js";
import { postSavedController } from "../controller/savedController.js";

const router = express.Router();

router.get("/", getSavedController);
router.post("/", postSavedController);



export default router;
