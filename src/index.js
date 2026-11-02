import express from "express";
import { logger } from "./middleware/logger.js";
import resourcesRouter from "./routes/resources.js";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/api/resources", resourcesRouter);

app.listen(3000, () => console.log("Server listening"));