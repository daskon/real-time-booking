import { Router } from "express";
import * as controller from "./auth.controller";
import { validate } from "../../middlewares/validate";
import { loginSchema } from "./auth.validation";

const router = Router();

router.post("/login", validate(loginSchema), controller.login);

export default router;