import express from "express"
import { UserController } from "../controller/UserController"
import { UserBussiness } from "../business/userBusiness"
import { UserDataBase } from "../database/userDataBase"

export const userRouter = express.Router()

const userController =
  new UserController(
    new UserBussiness(
      new UserDataBase()
    ))

userRouter.get("/", userController.getUsers)
userRouter.post("/", userController.createUser)
userRouter.delete("/:id", userController.deleteUser)
userRouter.put("/:id", userController.updateUser)

