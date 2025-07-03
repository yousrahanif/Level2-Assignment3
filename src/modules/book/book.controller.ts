import { Request, Response } from "express"
import Book from "./book.model"

const registerBook =async(req:Request,res:Response)=>{
  try{
      const payload=req.body
    const book = new Book(payload)
    const data = await book.save()

    res.send({
        success:true, 
        message:"Book created successfully",
        data})
  }
  catch(error){
    res.send({
         success:true, 
        message:"Validation failed",
        error

    })

  }

}

const getAllBooks=async(req:Request,res:Response)=>{
  try{
    const filter=req.query.filter;
    const sortBy = req.query.sortBy || "createdAt";
    const sort = req.query.sort === "desc" ? -1 : 1;
    const limit = parseInt(req.query.limit as string) || 100;

    const query: any={}
    if(filter){
        query.genre=filter;
    }

      const data= await Book.find(query)
      .sort({[sortBy as string]: sort}).limit(limit)
      res.send({
         success:true, 
        message:"Book retrieved successfully",
        data

      })

  }
  catch(error){
     res.send({
        success:true, 
        message:"Book retrieved failed",
        error

    })

  }
}


const getBookById=async(req:Request,res:Response)=>{
try{
     const bookId= req.params.bookId;
        const data = await Book.findById(bookId)
        res.send({
        success:true, 
        message:"Book retrieved successfully",
        data})

}
catch(error){
    res.send({
         success:true, 
        message:"Getting book by Id failed",
        error

    })

}






}

const updateBook =async(req:Request, res:Response)=>{
try{
        const bookId= req.params.bookId;
        const data =await Book.findByIdAndUpdate(bookId, req.body, {new:true, runValidators: true
        });
         res.send({
        success:true, 
        message:"Book updated successfully",
        data})

}
catch(error){
     res.send({
        success:false, 
        message:"Book updating failed",
        error
    })

}
}



const deleteBook=async(req:Request, res:Response)=>{
try{
        const bookId= req.params.bookId;
        const data =await Book.findByIdAndDelete(bookId)
        



        
         res.send({
        success:true, 
        message:"Book deleted successfully",
        data:null})

}
catch(error){
     res.send({
        success:false, 
        message:"Book deleting failed",
        error
    })

}

}


export {registerBook, getAllBooks, getBookById, updateBook, deleteBook}