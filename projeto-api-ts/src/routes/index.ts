import { Router } from "express"
import taskRoutes from "./task/task.routes"
import userRoutes from "./user/user.routes"
import authRoutes from "./auth/auth.routes"

const routes = Router()

routes.use("/task", taskRoutes)
routes.use("/user", userRoutes)
routes.use("/auth", authRoutes)

export default routes
