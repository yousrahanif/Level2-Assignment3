import { Router } from "express";
import { borrowBook, getBorrowedBooks } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post("/", borrowBook);

borrowRoute.get("/",getBorrowedBooks);
export default borrowRoute;
