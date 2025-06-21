import { Request, Response } from "express";
import Borrow from "./borrow.model";
import Book from "../book/book.model";

const borrowBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

   
    const book = await Book.findById(bookId);
    if (!book) {
       res.send({
        success: false,
        message: "Book not found",
        error: "Invalid book ID",
      });
      return;
    }

    if (book.copies < quantity) {
      res.send({
        success: false,
        message: "Not enough copies available",
        error: `Only ${book.copies} copies left`,
      });
    }

    book.copies -= quantity;
    book.updateAvailability();
    await book.save();

    const borrow = new Borrow({ book: bookId, quantity, dueDate });
    const data = await borrow.save();

    res.send({
      success: true,
      message: "Book borrowed successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to borrow book",
      error,
    });
  }
};





const getBorrowedBooks = async (req: Request, res: Response) => {
  try {
    const data = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",      
          localField: "_id",   
          foreignField: "_id", 
          as: "bookDetails",
        },
      },
      {
        $unwind: "$bookDetails",
      },
     
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookDetails.title",
            isbn: "$bookDetails.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.send({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Failed to get borrowed books summary",
      error,
    });
  }
};





export { borrowBook , getBorrowedBooks};
