import express from 'express';
import authRouter from "./routes/auth";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
var cors = require('cors')

const app = express();
dotenv.config();

const PORT = process.env?.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());

app.use("/api/auth", authRouter)


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

