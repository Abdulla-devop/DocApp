import express from "express";
import { doctorRouter } from "./Routes/doctor.js";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./Routes/user.js";
import { isAuthorized } from "./Auth/auth.js";


// iniating a server
const app = express();

// middleware
app.use(express.json());
app.use(cors());


// env configuration
dotenv.config();

// iniating a port
const Port = process.env.PORT;

// applicational routes
app.use("/doctor", isAuthorized,doctorRouter)
app.use("/user",userRouter)
// // check server
// app.get("/",(req,res) =>{
//     res.send("server is responding")
// })

// lisetining to a server
app.listen(Port,() => console.log(`Server lisetining in a localhost: ${Port}`))