"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, trim: true, required: [true, "Title is required"] },
    author: { type: String, trim: true, required: [true, "Author is required"] },
    genre: {
        type: String,
        enum: {
            values: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
            message: "Genre must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY",
        },
        required: [true, "Genre is required"],
    },
    isbn: { type: String, required: [true, "ISBN is required"],
        unique: [true, "This ISBN is already exist"], },
    description: { type: String, trim: true },
    copies: { type: Number, min: [0, "Copies must be a positive number"],
        required: [true, "Copies is required"], },
    available: { type: Boolean, default: true },
}, { timestamps: true });
bookSchema.methods.updateAvailability = function () {
    this.available = this.copies > 0;
};
const Book = (0, mongoose_1.model)("Book", bookSchema);
exports.default = Book;
