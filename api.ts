import express from "express"
import cors from "cors"
import { photoRouter} from './src/routers/photo-routers'


const app = express()
app.use(cors())
app.use(express.json())

app.use('/photo',photoRouter)

const Port = 5001
app.listen(Port, () => {
  console.log("we started on port", Port)
})
