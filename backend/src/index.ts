import express from "express";
import cors from "cors";
import timesRouter from "./routes/times";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/times", timesRouter);

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log(`backend api server running at localhost:{$PORT}`);
})
