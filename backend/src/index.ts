import express from "express";
import config from "./../config/config.js";
import mongoose from "mongoose";

const main = async () => {
    const app = express();
    const port = config.server.port
    const db = config.database.url

    app.get('/', (_, res) => {
        res.send('Hello, world!')
    })

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })

    mongoose.connect(db).then(() => {
        console.log("MongoDB database connected")
    })
}



main().catch((err) => {
    console.log(err);
})
