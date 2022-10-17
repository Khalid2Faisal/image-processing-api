import express, { NextFunction, Request, Response } from "express";
import imageController from "../../controllers/imageController";

const router = express.Router();
const { resize } = imageController;

router.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    const width = req.query.width as string;
    const height = req.query.height as string;

    // check with regex that width and height contains only numerical letters
    if (!/^\d+$/.test(width) || !/^\d+$/.test(height)) {
      return res.status(400).send({ message: "Width and height must be numbers" });
    }

    return next();
  },
  resize
);

export default router;
