import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
import bodyParse from "body-parser"
import cors from 'cors'
import news from "./routers/news.js"
import mongoose from "mongoose"



const app = express()
const port = process.env.PORT || 5000 
const URI = process.env.URI

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: true}))
app.use(cors())

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("connected DB")
    })
    .catch((err) => {
        console.log(err)
    })
app.use("/news", news)

app.get("/", (req, res) => {
    res.send('success')
})



app.listen(port, () => {
    console.log("server is running on " + port)
})