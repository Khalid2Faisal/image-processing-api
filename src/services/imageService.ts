import fs from "fs";
import sharp from "sharp";

const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    const resizedImage = await sharp(`assets/full/${fileName}.jpg`);
    await resizedImage
      .resize(width, height)
      .toFile(`assets/thumb/${fileName}-${width}x${height}.jpg`);

    return `assets/thumb/${fileName}-${width}x${height}.jpg`;
  } catch (error) {
    return error;
  }
};

const isResized = async (
  fileName: string,
  width: number,
  height: number
): Promise<boolean> => {
  // check if the image exist in assets/thumb
  const imageExist = fs.existsSync(`assets/thumb/${fileName}-${width}x${height}.jpg`);
  // console.log("Image is already resized before:", imageExist);
  return imageExist;
};

export default { resizeImage, isResized };
