"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("@hapi/joi");
const runSchema = (schema) => (unknown) => {
    const { error } = schema.validate(unknown);
    if (error)
        throw new joi_1.ValidationError(error.message, error.details, error._original);
};
exports.default = runSchema;
