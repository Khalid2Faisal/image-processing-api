import express, { Request, Response } from "express";
import imageRouter from "./api/imageRoutes";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Hello From API Endpoint!",
  });
});

router.use("/images", imageRouter);

export default router;
