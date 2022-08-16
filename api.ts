import express, { Request, Response } from "express"
import cors from "cors"
import { MongoClient } from "mongodb"
import { uri } from "./credentials"

const client = new MongoClient(uri)
const db = client.db("DamianCluster")
const photosCollection = db.collection("photos")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", async (req: Request, res: Response) => {
    const photos = await photosCollection.find({}).toArray()
  res.status(200).json(photos)
})

const Port = 5001
app.listen(Port, () => {
  console.log("we started on port", Port)
})
