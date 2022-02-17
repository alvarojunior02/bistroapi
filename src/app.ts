import express from 'express'
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true, 
    optionSuccessStatus:200
}
import router from './routes'

const app = express()

app.use(express.json())
app.use(cors(corsOptions));
app.use(router);

export { app }