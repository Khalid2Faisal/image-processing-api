// eslint-disable-next-line
import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test Root Endpoint Responses", () => {
  it("gets the root endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
  it("sends hello world message", async () => {
    const response = await request.get("/");
    expect(response.body.message).toBe("Hello World!");
  });
});
