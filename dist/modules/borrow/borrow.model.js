"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const borrowSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
const Borrow = (0, mongoose_1.model)("Borrow", borrowSchema);
exports.default = Borrow;
