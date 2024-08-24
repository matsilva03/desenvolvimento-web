import User from "../../models/user.entity"
import { Request, Response } from "express"

export default class UserController {
    static async index(req: Request, res: Response) {
        const users = await User.find()
        return res.json(users)
    }

    static async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ msg: "Todos os campos são obrigatórios." })
        }

        const user = new User()
        //User.create({name, email, password})

        user.name = name
        user.email = email
        user.password = password + "-"
        await user.save()

        return res.json(user)
    }
}
