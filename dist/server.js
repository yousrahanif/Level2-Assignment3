"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./modules/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.get("/", (req, res) => {
    res.send({ success: true, message: "I am here" });
});
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
mongoose_1.default.connect(config_1.default.database_url)
    .then(() => console.log("Connected to database"))
    .catch(console.error);
exports.default = app;
