import { Router } from "express";
import {register} from "../controller";

const router = Router();

router.get("/register", register);


export default router;