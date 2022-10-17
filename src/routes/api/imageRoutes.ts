import express from "express";
import imageController from "../../controllers/imageController";
import validateResize from "../../middlewares/validateResize";

const router = express.Router();
const { resize } = imageController;

router.get("/", validateResize, resize);

export default router;
