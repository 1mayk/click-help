import express from "express";
import "express-async-errors";
import userRouter from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler";
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/user', userRouter);

app.use(errorHandler);

export default app;