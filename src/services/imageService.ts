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

export default { resizeImage };
