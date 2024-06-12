import express from "express";
import { getSavedController } from "../controller/savedController.js";

const router = express.Router();

router.get("/", getSavedController);



export default router;
