import { NextFunction, Request, Response } from "express";

const validateResize = (req: Request, res: Response, next: NextFunction) => {
  const fileName = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;

  // Check if fileName, width, and height are provided
  if (!fileName || !width || !height) {
    return res.status(400).json({
      message: "Please provide filename, width, and height",
    });
  }

  // check with regex that width and height contains only numerical
  const regex = /^-?\d+$/;
  if (!regex.test(width) || !regex.test(height)) {
    return res.status(400).json({
      message: "width and height must be numerical",
    });
  }

  // check that width and height are not negative
  if (Number(width) < 0 || Number(height) < 0) {
    return res.status(400).send({ message: "Width and height must be positive" });
  }

  // check that width and height are between 50 and 2000
  if (
    Number(width) < 50 ||
    Number(width) > 2000 ||
    Number(height) < 50 ||
    Number(height) > 2000
  ) {
    return res
      .status(400)
      .send({ message: "Width and height must be between 50 and 2000" });
  }

  return next();
};

export default validateResize;
