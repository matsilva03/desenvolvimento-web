import express from "express"
import { Request, Response } from "express"

const app = express();
const port = process.env.PORT || 3001

app.use(express.json())

app.get("/tabuada/:numero", (req: Request, res: Response) => {
  const numero = parseInt(req.params.numero, 10)

  if (isNaN(numero)) {
    return res.status(400).json({ error: "Número inválido" })
  }

  const tabuada: { [key: number]: string } = {}
  for (let i = 1; i <= 10; i++) {
    tabuada[i] = `${numero} x ${i} = ${numero * i}`
  }

  return res.status(200).json(tabuada)
})

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})