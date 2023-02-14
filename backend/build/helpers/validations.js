"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runSchema_1 = __importDefault(require("./runSchema"));
const schemas_1 = __importDefault(require("./schemas"));
const validations = {
    userValidation: (0, runSchema_1.default)(schemas_1.default.userBody),
    loginValidation: (0, runSchema_1.default)(schemas_1.default.loginBody),
};
exports.default = validations;
