import { Router } from "express";
import {login, register} from "../controllers";
import { validateUser } from "../middlewares/validatorRegisterMiddleware";

const router = Router();

router.post("/register",validateUser, register);
router.post("/login", login)


export default router;