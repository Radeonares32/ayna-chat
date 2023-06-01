import express from "express";
import http from "http";
import bodyParser from "body-parser";

const app = express();
const server = http.createServer(app);

//routes
import { userRoutes } from "./routes/routes";

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", userRoutes);

server.listen(3000);
