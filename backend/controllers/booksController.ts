import express from "express";
import { Book } from "../models/bookModel.js";

const getBooks = (async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const books = await Book.findById(id);

        return res.status(200).json({books});
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            res.status(500).send({ message: err.message })
        }
    }
})

const getBook = (async (req: express.Request, res: express.Response) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            res.status(500).send({ message: err.message })
        }
    }
})

const addBook = (async (req: express.Request, res: express.Response) => {
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
        
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear
        }
        
        const book = await Book.create(newBook);

        return res.status(201).send(book);
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            res.status(500).send({ message: err.message });
        }
    }
});

const updateBook = (async (req: express.Request, res: express.Response) => {
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

        const { id } = req.params;
        
        const result = await Book.findByIdAndUpdate(id, req.body);
        
        if (!result) {
            return res.status(400).send({ message: "Book not found" })
        }
        
        return res.status(200).send({ message: "Book updated successfully" })
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            res.status(500).send({ message: err.message });
        }
    }
});

const deleteBook = (async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(400).send({ message: "Book not found" })
        }

        return res.status(200).send({ message: "Book deleted successfully"})
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
            res.status(500).send({ message: err.message });
        }
    }
});

export { getBooks, getBook, addBook, updateBook, deleteBook };
