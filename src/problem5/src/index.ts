import "reflect-metadata";
require("dotenv").config();
import express from "express";
import cors from "cors";

import router from "./routes";
import { AppDataSource } from "./configs/db";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // ROUTES
    app.use("/", router());

    // Error Handler
    // app.use(errorHandler);

    const port = process.env.PORT ? Number(process.env.PORT) : 5000;
    app.listen(port, () => {
      console.log(`🚀 Server is listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
