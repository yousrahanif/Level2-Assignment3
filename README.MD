# Library Management System API

A simple REST API for managing books and borrowing, built with Express.js and MongoDB (Mongoose).

---

## Setup

1. **Clone the repo**  
   git clone https://github.com/yousrahanif/Level2-Assignment3.git
   cd Assignment3

2. **Install dependencies**

npm install

3. **.env file** 

NODE_ENV=development
PORT=4500
DATABASE_URL=your_mongodb_connection_string

4. **Run Server** 
npm run dev

**API Endpoints**
 Books:
 GET /api/books
Retrieve a list of all books.

GET /api/books/:bookId
Retrieve details of a book by its ID.

PUT /api/books/:bookId
Update a book by its ID.

DELETE /api/books/:bookId
Delete a book by its ID.

Borrow: 

POST /api/borrow
Borrow books by specifying the book ID, quantity, and due date.

GET /api/borrow
Get a summary of borrowed books.