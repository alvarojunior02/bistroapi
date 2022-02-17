import express from 'express'
const cors = require('cors');
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
import router from './routes'

const app = express()

app.use(express.json())
app.use(cors(corsOpts));
app.use(router);

export { app }