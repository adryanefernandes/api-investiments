import { Router } from "express";
import credentialRouter from "./credential.router";
import userRouter from "./user.router";

const router = Router();

router.use("/credential", credentialRouter);
router.use("/user", userRouter);

export default router;
