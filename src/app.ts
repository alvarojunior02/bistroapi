import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()

app.use(cors({
    origin: '*', 
    methods: ["GET", "POST", "PUT", "DELETE"],
    maxAge: 3600,
    credentials: true,
}));
app.use(express.json())
app.use(router);

export { app }