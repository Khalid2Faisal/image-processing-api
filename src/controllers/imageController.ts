import { Request, Response } from "express";
import imageService from "../services/imageService";

const resize = (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string, 10);
  const height = parseInt(req.query.height as string, 10);

  const result = imageService.resizeImage(filename, width, height);

  res.status(200).send(result);
};

export default { resize };
