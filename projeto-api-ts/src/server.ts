import cors from "cors"
import express from "express"
import dataBase from "./database/ormconfig"
import routes from "./routes"
import cookieParser from "cookie-parser"

const app = express()
const port = process.env.PORT || 3001

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        credentials: true,
    })
)
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
    console.log(dataBase.isInitialized)
})
