import express from "express"
import dataBase from "./database/ormconfig"

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
    console.log(dataBase.isInitialized)
})
