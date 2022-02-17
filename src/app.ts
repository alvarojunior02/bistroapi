import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());
app.use(express.json());
app.use(router);

export { app }