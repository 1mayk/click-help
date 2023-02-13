export type ErrorResponseObject = {
  [key: string]: { msg: string; statusCode: number };
};

const ErrorCatalog: ErrorResponseObject = {
  userNotFound: {
    msg: "Usuário não encontrado!",
    statusCode: 404,
  },
  invalidPassword: {
    msg: "Senha incorreta, tente novamente!",
    statusCode: 400,
  }
};

export default ErrorCatalog;
