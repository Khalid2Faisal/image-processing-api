import imageService from "../../services/imageService";

describe("Test Image Service", () => {
  it("should resize an image", async () => {
    const result = await imageService.resizeImage("santamonica", 100, 100);
    expect(result).toBe("assets/thumb/santamonica-100x100.jpg");
  });
});
