import { Router } from "express"
import UserController from "../../controllers/user/user.controller"

const userRoutes = Router()

userRoutes.get("/", UserController.index)
userRoutes.post("/", UserController.store)

export default userRoutes
