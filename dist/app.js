"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const task = require("./routes/task");
const connectDB = require('./db/connect');
require('dotenv').config();
app.use(express_1.default.json());
//routes
app.use('/api/v1', task);
const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log("teste");
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
