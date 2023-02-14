"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("@hapi/joi");
const errorsCatalog_1 = __importDefault(require("../errors/errorsCatalog"));
const errorHandler = (error, _req, res, _next) => {
    const { message } = error;
    if (error instanceof joi_1.ValidationError) {
        const { message } = error;
        return res.status(400).json({ message });
    }
    if (errorsCatalog_1.default[message]) {
        const { msg, statusCode } = errorsCatalog_1.default[message];
        return res.status(statusCode).json({ message: msg });
    }
    return res.status(500).json({ message });
};
exports.default = errorHandler;
