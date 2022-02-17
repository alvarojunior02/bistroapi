import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()

app.use(express.json());
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin");
    req.header("Access-Control-Allow-Methods");
    
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    app.use(cors());
    next();
});
app.use(router);

export { app }