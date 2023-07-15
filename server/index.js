import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import chalk from 'chalk';

const log = console.log;

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("testing");
})


app.listen(process.env.PORT, () => {
    log(chalk.hidden("\n"));
    log(chalk.green("[server] - Server started !"));
    log(chalk.white("[server] - Access the server at ")+chalk.blue.underline("http://localhost:" + process.env.PORT));
})