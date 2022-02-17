import express from 'express'
const cors = require('cors');
import router from './routes'

const app = express()

app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}));
app.use(router);

export { app }