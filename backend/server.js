//these are our package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//these are file imports
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
// import mongoose from 'mongoose'; 

//variables
const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

//middle-layer

app.use(express.json()); //this will allow to extract the fields from request app body( from req.body which is auth.controller.js) 
app.use(cookieParser());

app.use("/api/auth",authRoutes); 
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
// //root route http://localhost:5000/
//   res.send("HELLO WORLD!!");
// });



// app.get("/api/auth/signup", (req, res)=>{
//   res.send("signup route");
//   console.log("signup route");
// })
// app.get("/api/auth/login", (req, res)=>{
//   res.send("login route");
//   console.log("login route");
// })
// app.get("/api/auth/logout", (req, res)=>{
//   res.send("logout route");
//   console.log("logout route");
// })

app.listen(PORT,() =>{
  connectToMongoDB();
  console.log(`server is running in this port ${PORT} `)
});