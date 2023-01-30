import { Router } from "express";
import signupController from "../../controller/credentials/signup.controller";

const router = Router();

// Atualiza endereço atual de usuário
router.put("/address", signupController.handle);

export default router;
