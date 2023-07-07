import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("testing");
})



app.listen(process.env.PORT, () => {
    console.log("Server running on localhost:" + process.env.PORT);
})