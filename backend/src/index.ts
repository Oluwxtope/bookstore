import express from "express";
import config from "./../config/config.json" with { type: "json" };

const main = async () => {
    const app = express();
    const port = config.server.port

    app.get('/', (_, res) => {
        res.send('Hello, world!')
    })

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}

main().catch((err) => {
    console.log(err);
})
