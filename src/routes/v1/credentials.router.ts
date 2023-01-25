import { Router } from "express";
import signupController from "../../controller/credentials/signup.controller";

const router = Router();

router.post("/signup", signupController.handle);

export default router;
