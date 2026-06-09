import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.routes";
import { errorHandler } from "./middlewares/errorHandler";
import userRouter from "./modules/user/user.routes";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);

app.use(errorHandler);

export default app;