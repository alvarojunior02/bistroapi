import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()

const corsOptions = {
    origin: '*', 
    methods: "GET,PUT,POST,DELETE"
}

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(router);

export { app }