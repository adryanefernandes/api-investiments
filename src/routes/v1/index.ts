import { Router } from "express";
import credentialsRouter from "./credentials.router";

const router = Router();

router.use("/credentials", credentialsRouter);

export default router;
