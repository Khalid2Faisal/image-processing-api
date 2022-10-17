// eslint-disable-next-line
import supertest from "supertest";
import app from "../../index";

const request = supertest(app);
describe("Test API Endpoint Responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
  it("sends hello message", async () => {
    const response = await request.get("/api");
    expect(response.body.message).toBe("Hello From API Endpoint!");
  });
});
