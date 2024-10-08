import express from "express";
import config from "./../config/config.js";
import mongoose from "mongoose";
import cors from "cors";
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

app.use(cors()); // Allow All Origins with Default of cors(*) for testing

// app.use(
//     cors({
//         origin: "https://localhost:3000",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"]
        
//     })
// );

app.use("/books", booksRoute);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
