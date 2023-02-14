"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCatalog = {
    userNotFound: {
        msg: "Usuário não encontrado!",
        statusCode: 404,
    },
    invalidPassword: {
        msg: "Senha incorreta, tente novamente!",
        statusCode: 400,
    },
    userAlreadyExists: {
        msg: "Email já cadastrado!",
        statusCode: 409
    }
};
exports.default = ErrorCatalog;
