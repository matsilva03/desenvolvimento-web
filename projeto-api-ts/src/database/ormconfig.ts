import { DataSource } from "typeorm"

const dataBase = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    entities: ["./src/models/*.ts"],
    logging: true,
    synchronize: true,
})

dataBase
    .initialize()
    .then(() => {
        console.log(`Banco de dados inicializado`)
    })
    .catch((err) => {
        console.error(`Erro ao inicializar o banco de dados`, err)
    })

export default dataBase
