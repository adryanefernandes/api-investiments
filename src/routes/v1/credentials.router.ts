import { Router } from "express";

const router = Router();

router.post("/signup", (req, res) => res.send({ message: "tudo certo" }));

export default router;
