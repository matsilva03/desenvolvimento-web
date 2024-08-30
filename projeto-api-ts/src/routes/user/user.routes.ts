import { Router } from "express"
import UserController from "../../controllers/user/user.controller"

const userRoutes = Router()

userRoutes.get("/", UserController.index)
userRoutes.post("/", UserController.store)
userRoutes.post("/login", UserController.login)

export default userRoutes
