import { Router } from "express";
import loginController from "../../controller/credentials/login.controller";
import signupController from "../../controller/credentials/signup.controller";

const router = Router();

router.post("/signup", signupController.handle);
router.post("/login", loginController.handle);

export default router;
