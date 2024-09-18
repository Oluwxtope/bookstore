import express, { Router } from "express";
import { getBooks, getBook, addBook, updateBook, deleteBook } from "../controllers/booksController.js";

const booksRoute: Router = express.Router();

booksRoute.get('/', getBooks)
booksRoute.get("/:id", getBook);
booksRoute.post("/", addBook);
booksRoute.put("/:id", updateBook);
booksRoute.delete("/:id", deleteBook);

export { booksRoute };
