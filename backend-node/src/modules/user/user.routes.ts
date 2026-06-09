import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware";
import * as controller from "./user.controller";

const router = Router();

router.get("/", authMiddleware, controller.getUsers);

export default router;