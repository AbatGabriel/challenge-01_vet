import { Router } from "express";

import { createControl } from "../controllers/controllers_test";

const router = Router()

router.post("/",createControl)
router.get("/")
router.patch("/:id")
router.delete("/:id")

export default router