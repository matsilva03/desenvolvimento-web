import User from "../../models/user.entity"
import { Request, Response } from "express"
import bcrypt from "bcrypt"

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
        user.password = bcrypt.hashSync(password, 12)
        await user.save()

        return res.json(user)
    }

    static async login(req: Request, res: Response) {
        const { email, password } = req.body

        const user = await User.findOneBy({ email })
        const passwordUser = user?.password ?? ""

        const passwordMatch = bcrypt.compareSync(password, passwordUser)

        if (!passwordMatch) {
            return res.status(401).json({ msg: "Usuário ou senha incorretos" })
        }

        res.status(200).send("Ok!")
    }
}
