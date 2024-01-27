import express from "express"


import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true

}))

// json se data aaye to uski limit kya honi chaiye
app.use(express.json({limit:"100kb"}))

// url se data aaye to 
app.use(express.urlencoded({extended:true, limit:"100kb"}))
// storing some files locally
app.use(express.static("public"))
app.use(cookieParser())


// routes import

import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)




export { app } 