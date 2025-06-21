"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getAllBooks = exports.registerBook = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const registerBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const book = new book_model_1.default(payload);
        const data = yield book.save();
        res.send({
            success: true,
            message: "Book created successfully",
            data
        });
    }
    catch (error) {
        res.send({
            success: true,
            message: "Validation failed",
            error
        });
    }
});
exports.registerBook = registerBook;
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.query.filter;
        const sortBy = req.query.sortBy || "createdAt";
        const sort = req.query.sort === "desc" ? -1 : 1;
        const limit = parseInt(req.query.limit) || 10;
        const query = {};
        if (filter) {
            query.genre = filter;
        }
        const data = yield book_model_1.default.find(query)
            .sort({ [sortBy]: sort }).limit(limit);
        res.send({
            success: true,
            message: "Book retrieved successfully",
            data
        });
    }
    catch (error) {
        res.send({
            success: true,
            message: "Book retrieved failed",
            error
        });
    }
});
exports.getAllBooks = getAllBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findById(bookId);
        res.send({
            success: true,
            message: "Book retrieved successfully",
            data
        });
    }
    catch (error) {
        res.send({
            success: true,
            message: "Getting book by Id failed",
            error
        });
    }
});
exports.getBookById = getBookById;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findByIdAndUpdate(bookId, req.body, { new: true, runValidators: true
        });
        res.send({
            success: true,
            message: "Book updated successfully",
            data
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Book updating failed",
            error
        });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findByIdAndDelete(bookId);
        res.send({
            success: true,
            message: "Book deleted successfully",
            data: null
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Book deleting failed",
            error
        });
    }
});
exports.deleteBook = deleteBook;
