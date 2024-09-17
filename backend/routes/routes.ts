import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.status(200).send('Hello, world!')
})

router.post("/books", async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishedYear
        ) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishedYear"
            });
        }
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            res.status(500).send({ message: err.message });
        }
    }
});

export { router };
