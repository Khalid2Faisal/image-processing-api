import { Request, Response } from "express";
import imageService from "../services/imageService";

const resize = async (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string, 10);
  const height = parseInt(req.query.height as string, 10);

  try {
    const imagePath = (await imageService.resizeImage(filename, width, height)) as
      | string
      | Error;
    // check if the image does not exists
    if (imagePath instanceof Error) {
      return res.status(404).send({ message: "Image not found" });
    }
    return res.status(200).sendFile(imagePath, { root: "./" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default { resize };
