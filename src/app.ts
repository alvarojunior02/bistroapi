import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
    app.use(cors());
});
app.use(express.json());
app.use(router);

export { app }