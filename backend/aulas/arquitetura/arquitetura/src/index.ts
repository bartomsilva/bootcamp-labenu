import express from "express"
import cors from "cors"
import { userRouter } from "./routes/userRouter"

const s = express() 
const PORT = 3003 

s.use(cors())
s.use(express.json())

s.listen(PORT, ()=> console.log("server on port ",PORT))

s.use("/users",userRouter)
