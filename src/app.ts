import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()

const corsOptions = {
    origin: '*', 
    methods: "GET,PUT,POST,DELETE"
}

app.use(express.json())
app.use(cors());
app.use(router);

export { app }