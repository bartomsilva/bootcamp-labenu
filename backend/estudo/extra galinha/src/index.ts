import { Galinha } from "./Galinha"
import express, { Request, Response } from "express"
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log("on port 3003"))


app.get('/', async (req: Request, res: Response) => {
  try {
    const galinha1 = await new Galinha("fofoca")
    await galinha1.botarOvo()

    res.send(galinha1.infoGalinha())

  } catch (error) {
    res.send(error)
  }
})






