import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/modules/members/members.routes";
import authRouter from "./app/modules/auth/auth.routes";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:8000", credentials: true }));

// application routes
app.use("/api/members", router);
app.use("/api/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
