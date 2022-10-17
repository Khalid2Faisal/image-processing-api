import express, { Request, Response } from "express";
import routes from "./routes";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Hello World!" });
});

app.use("/api", routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`app listening on port ${PORT}!`);
});

export default app;
