import express from 'express'
import dotenv from 'dotenv'
import { db } from './db/firebase.js';
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("testing");
})

const data = {
    name: "testing",
    age : 12
}



app.listen(process.env.PORT, () => {
    console.log("Server running on localhost:" + process.env.PORT);
})