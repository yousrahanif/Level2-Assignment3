import { Schema, model } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowSchema = new Schema<IBorrow>({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: [true, "Book reference is required"],
  },
  quantity: {
    type: Number,
    min: [1, "Quantity must be at least 1"],
    required: [true, "Quantity is required"],
  },
  dueDate: {
    type: Date,
    required: [true, "Due date is required"],
  },
}, {timestamps: true});


const Borrow = model<IBorrow>("Borrow", borrowSchema);

export default Borrow;
