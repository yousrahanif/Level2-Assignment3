import { Document, model, Schema } from "mongoose";
import { IBook } from "./book.interface";



interface IBookMethods {
  updateAvailability(): void;
}

type BookModel = Document & IBook & IBookMethods;



const bookSchema= new Schema<BookModel>({

title: {type: String,trim: true, required: [true, "Title is required"]}, 
author:{type: String, trim: true,required: [true, "Author is required"]}, 
genre: {
    type: String, 
enum: {
        values: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
        message: "Genre must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY",
      },
      required: [true, "Genre is required"],
},
isbn: {type: String,  required: [true, "ISBN is required"],
  unique:[true, "This ISBN is already exist"],},
description: {type: String, trim: true},
copies:{type: Number, min: [0, "Copies must be a positive number"], 
        required: [true, "Copies is required"],}, 
available:{type: Boolean, default: true},


},
{timestamps: true}
);




bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
};

const Book=model<BookModel>("Book", bookSchema)
export default Book;