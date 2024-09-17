import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  // Title is mandatory
        trim: true,  // Removes whitespace from the beginning and end
      },
      author: {
        type: String,
        required: true,  // Author is mandatory
        trim: true,
      },
      publishedYear: {
        type: Number,
        required: true,
      }
    });

const Book = mongoose.model('Book', bookSchema);

export { Book };
