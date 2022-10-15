import supertest from "supertest";
import app from "../../../index";

const request = supertest(app);
describe("Test Images Endpoint Responses", () => {
  it("gets the images endpoint", async () => {
    const response = await request.get(
      "/api/images?filename=test&width=100&height=100"
    );
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      "I am resizing the image with file name test to 100x100"
    );
  });
});
