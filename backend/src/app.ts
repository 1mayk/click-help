import express from "express";
import "express-async-errors";
import userRouter from "./routes/userRoutes";
import homeRouter from "./routes/homeRoutes";
import errorHandler from "./middlewares/errorHandler";
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/', homeRouter);
app.use('/user', userRouter);

app.use(errorHandler);

export default app;