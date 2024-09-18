import express from "express";
import { getBooks, getBook, addBook, updateBook, deleteBook } from "../controllers/booksController.js";

const booksRoute = express.Router();

booksRoute.get('/', getBook)
booksRoute.get("/:id", getBooks);
booksRoute.post("/", addBook);
booksRoute.put("/:id", updateBook);
booksRoute.delete("/:id", deleteBook);

export { booksRoute };
