import express from "express"
import cors from "cors"
import config from "./config";
import mongoose from "mongoose";
import routes from "./modules/routes";
const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)


app.get("/", (req,res)=>{
    res.send({success:true,message: "I am here"})
})

// app.listen(config.port, ()=>{
//     console.log("Library Management is listening")
// })
// async function server (){
//     try{
//         console.log(config)

//         await mongoose.connect(config.database_url!)
//         console.log(`Connected to database ${config.port}`)
//     }
//     catch(error){
//         console.error(`server error ${server}`)

//     }

// }
// server();
mongoose.connect(config.database_url!)
  .then(() => console.log("Connected to database"))
  .catch(console.error);
export default app;
