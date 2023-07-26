"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    _id: {
        type: Number,
        required: [true, 'id not provide'],
    },
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    phone: {
        type: String,
        required: [true, 'must provide number'],
        trim: true,
        maxlength: [14, 'name can not be more than 14']
    },
    email: {
        type: String,
        required: [true, 'must provide email'],
        trim: true,
    },
    date_of_birth: {
        type: String,
        required: [true, 'must provide a date'],
        trim: true,
    },
    zip_code: {
        type: String,
        required: [true, 'must provide zip-code'],
        trim: true,
        maxlength: [9, 'name can not be more than 9 characters']
    }
});
exports.default = (0, mongoose_1.model)('Task', taskSchema);
