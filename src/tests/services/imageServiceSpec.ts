import imageService from "../../services/imageService";

describe("Test Image Service", () => {
  it("should resize an image", () => {
    const result = imageService.resizeImage("test", 100, 100);
    expect(result).toBe(
      "I am resizing the image with file name test to 100x100"
    );
  });
});
