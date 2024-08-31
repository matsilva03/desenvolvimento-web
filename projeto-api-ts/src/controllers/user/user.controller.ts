import User from "../../models/user.entity"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import Token from "../../models/token.entity"

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
        const passwordUser = user
            ? user.password
            : "$2a$12$goovcbmKA4AWJQCiCeLI4ObmPGamAlYQ2l/diVEJ6lzoVrGpJ5e9i"

        const passwordMatch = bcrypt.compareSync(password, passwordUser)

        if (!passwordMatch || !user) {
            return res.status(401).json({ msg: "Usuário ou senha incorretos" })
        }

        await Token.delete({ userId: user.id })

        const generatedToken = bcrypt
            .hashSync(`${user.id}${Date.now()}`, 8)
            .slice(-31)

        const newToken = new Token()
        newToken.token = generatedToken
        newToken.userId = user.id
        newToken.expiresAt = new Date(Date.now() + 60 * 60 * 1000)
        newToken.refreshToken = generatedToken

        await newToken.save()

        res.json(newToken)
    }
}
