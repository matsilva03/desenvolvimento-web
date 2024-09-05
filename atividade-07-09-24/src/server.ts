import express from "express"
import { Request, Response } from "express"

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.post("/remove-duplicates", (req: Request, res: Response) => {
  const { text } = req.body

  let result: string = ""
  let duplicates: string[] = []

  for (let character of text) {
    if (duplicates.indexOf(character) === -1) {
      result = result + character
      duplicates.push(character)
    }
  }

  return res.status(200).json({ result: result })
})

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})
