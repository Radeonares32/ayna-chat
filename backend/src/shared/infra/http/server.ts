import express from "express";
import http from "http";
import bodyParser from "body-parser";

const app = express();
const server = http.createServer(app);

//routes
import { userRoutes } from "./routes/routes";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api", userRoutes);

//db
import { mongoConnection } from "../db/mongodb";

server.listen(3000, () => {
  mongoConnection();
});
