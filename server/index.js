import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import chalk from 'chalk';
import { db } from './db/firebase.js';
import { collection, addDoc } from "firebase/firestore";

const log = console.log;

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("testing");
})

app.post('/api/user/update',async (req, res) => {
    log(req.body);
    res.status(200).send(req.body);
//    const docRef = await addDoc(collection(db, "users"))
})

app.listen(process.env.PORT, () => {
    log(chalk.hidden("\n"));
    log(chalk.green("[server] - Server started !"));
    log(chalk.white("[server] - Access the server at ")+chalk.blue.underline("http://localhost:" + process.env.PORT));
})