# Library Management System API

A simple REST API for managing books and borrowing using Express.js and MongoDB (Mongoose)

## Setup

1. Clone the repo  
   `https://github.com/yousrahanif/Level2-Assignment3.git`  
   `cd Assignment3`

2. Install dependencies  
   `npm install`

3. Create a `.env` file with: 

Example: 
NODE_ENV=development
PORT=4500
DATABASE_URL=your_mongodb_connection_string

4. Run the server  
`npm run dev`


##API:
GET /api/books
List books 

GET /api/books/:bookId
Get a book by ID.

PUT /api/books/:bookId
Update a book.


DELETE /api/books/:bookId
Delete a book.

Borrow
POST /api/borrow
Borrow books.


GET /api/borrow
Get summary of borrowed books.