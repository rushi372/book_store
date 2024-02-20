import express from "express";
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    res.status(234).send("GET Request Called");
})

app.use('/books', booksRoute);

//connecting with mongoDB using mongoDBURL
mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("Connected to Database");
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
})
.catch((error)=>{
    console.error(error);
});