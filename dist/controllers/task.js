"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("../models/task"));
const getAllTasks = async (req, res) => {
    try {
        const tasks = await task_1.default.find({});
        res.status(200).json({ sucess: true, data: { tasks, nbHits: task_1.default.length } });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
const createTask = async (req, res) => {
    try {
        const task = await task_1.default.create(req.body);
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
module.exports = {
    getAllTasks,
    createTask
};
