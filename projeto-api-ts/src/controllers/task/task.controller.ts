import { Request, Response } from "express"
import Task from "../../models/task.entity"

export default class TaskController {
    static async index(req: Request, res: Response) {
        const tasks = await Task.find()
        return res.json(tasks)
    }

    static async store(req: Request, res: Response) {
        const { title, completed } = req.body

        if (!title) {
            return res.status(400).json({ msg: "O título é obrigatório" })
        }

        const task = new Task()
        task.title = title
        task.completed = completed
        await task.save()

        return res.status(201).json(task)
    }
}
