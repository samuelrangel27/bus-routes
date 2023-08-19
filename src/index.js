import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(`/api`,routes());

mongoose.connect('mongodb://root:root@localhost:27017/admin')
    .then(result => app.listen(3000, () => {
        console.log(' Running')
    }))
    .catch(err => console.log(err))


export default app;