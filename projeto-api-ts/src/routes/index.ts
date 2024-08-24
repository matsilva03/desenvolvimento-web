import { Router } from "express"
import taskRoutes from "./task/task.routes"
import userRoutes from "./user/user.routes"

const routes = Router()

routes.use("/task", taskRoutes)
routes.use("/user", userRoutes)

export default routes
