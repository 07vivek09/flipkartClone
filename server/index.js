import dotenv from 'dotenv'
import express from 'express' 
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';

import Routes from './routes/route.js';


const app = express();

dotenv.config();

const PORT = 8000;

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

Connection(username,password);

app.listen(PORT, () => console.log(`server is running succesfully at port ${PORT}`))

DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);