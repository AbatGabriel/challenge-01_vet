"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { getAllTasks, createTask, getTask } = require("../controllers/task");
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask);
module.exports = router;
