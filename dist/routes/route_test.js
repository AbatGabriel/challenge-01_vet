"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_test_1 = require("../controllers/controllers_test");
const router = (0, express_1.Router)();
router.post("/", controllers_test_1.createControl);
router.get("/");
router.patch("/:id");
router.delete("/:id");
exports.default = router;
