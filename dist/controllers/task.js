"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require("../models/task");
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        //res.status(200).json({tasks})
        //res.status(200).json({tasks,amount:task.length})
        res.status(200).json({ sucess: true, data: { tasks, nbHits: Task.length } });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
};
module.exports = {
    getAllTasks,
    createTask
};
