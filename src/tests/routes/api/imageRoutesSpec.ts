import supertest from "supertest";
import app from "../../../index";

const request = supertest(app);
describe("Test Images Endpoint Responses", () => {
  it("gets the images endpoint", async () => {
    const response = await request.get(
      "/api/images?filename=santamonica&width=100&height=200"
    );
    expect(response.status).toBe(200);
  });
  it("sends an image file", async () => {
    const response = await request.get(
      "/api/images?filename=santamonica&width=100&height=200"
    );
    expect(response.body).toBeInstanceOf(Buffer);
  });
  it("returns an error when no images found", async () => {
    const response = await request.get("/api/images?filename=test&width=100&height=200");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Image not found" });
  });
});
