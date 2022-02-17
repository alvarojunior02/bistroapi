import express from 'express'
const cors = require('cors');
import router from './routes'

const app = express()

app.use(express.json())
app.use(cors({origin: '*', methods: "GET,PUT,POST,DELETE"}));
app.use(router);

export { app }