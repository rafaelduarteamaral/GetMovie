import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config();

export interface ProcessEnv {
  [key: string]: string | undefined
}

import routes from './routes';

const app = express();

//use cors middleware
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(routes);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 

app.listen(3333);

export default app;
