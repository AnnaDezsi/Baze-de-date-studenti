import express from 'express';
import authRouter from "./routes/auth";

const app = express();
const PORT = 3000;

app.use("/api", authRouter)


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

