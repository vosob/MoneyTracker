import express from "express";
import cors from "cors";
import appRouter from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(appRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
