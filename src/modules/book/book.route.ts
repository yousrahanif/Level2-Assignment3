import { Router } from "express";
import { deleteBook, getAllBooks, getBookById, registerBook, updateBook } from "./book.controller";

const bookRoute= Router()
bookRoute.post("/", registerBook);
bookRoute.get("/:bookId", getBookById)
bookRoute.put("/:bookId", updateBook);
bookRoute.delete("/:bookId", deleteBook);

bookRoute.get("/", getAllBooks);


export default bookRoute;