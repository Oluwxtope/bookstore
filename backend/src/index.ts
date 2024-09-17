import express from "express";
import config from "./../config/config.js";
import mongoose from "mongoose";
import { router } from "./../routes/routes.js";

const db = config.database.url

mongoose
    .connect(db)
    .then(() => {
        console.log("MongoDB database connected")
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB database")
        console.log(err)
    })

const app = express();
const port = config.server.port

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
