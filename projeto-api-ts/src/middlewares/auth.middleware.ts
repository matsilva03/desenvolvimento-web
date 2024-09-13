import { Request, Response, NextFunction } from "express"
import Token from "../models/token.entity"

export default async function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ error: "Token não informado" })

    const userToken = await Token.findOneBy({ token })
    if (!userToken) return res.status(401).json({ error: "Token inválido" })

    if (userToken.expiresAt < new Date()) {
        await userToken.remove()
        return res.status(401).json({ error: "Token expirado" })
    }

    req.headers.userId = userToken.userId.toString()

    next()
}
