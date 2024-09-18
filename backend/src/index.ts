import express from "express";
import config from "./../config/config.js";
import mongoose from "mongoose";
import { booksRoute } from "../routes/booksRoute.js";

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

app.use(express.json())
app.use("/books", booksRoute);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
