import express from "express";
import imageController from "../../controllers/imageController";

const router = express.Router();
const { resize } = imageController;

router.get("/", resize);

export default router;
