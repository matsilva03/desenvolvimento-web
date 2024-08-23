import { Router } from "express"
import TaskController from "../../controllers/task/task.controller"

const taskRoutes = Router()

taskRoutes.get("/", TaskController.index)
taskRoutes.post("/", TaskController.store)

export default taskRoutes
