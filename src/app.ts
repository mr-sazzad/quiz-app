import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { globalRoutes } from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: "Quiz Application",
    author: "sazzad-karim",
    version: "1.0.0",
    start_date: "2023-12-21",
    greetings: "Welcome to Quiz Application Server!",
  });
});

app.use("/api/v1", globalRoutes);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
