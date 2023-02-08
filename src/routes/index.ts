import { Router } from "express";
import { claimsMiddleware } from "../middleware/claims.middleware";
import routerV1 from "./v1";

const router = Router();

router.use("/v1", claimsMiddleware, routerV1);

export default router;
