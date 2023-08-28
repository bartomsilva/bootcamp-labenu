import express from "express"
import { UserController } from "../controller/UserController"
import { UserBusiness } from "../business/UserBusiness"
import { UserDataBase } from "../database/UserDatabase"

export const userRouter = express.Router()

const userController = new UserController(new UserBusiness( new UserDataBase()))

userRouter.post("/singup", userController.singUp)
userRouter.post("/login")