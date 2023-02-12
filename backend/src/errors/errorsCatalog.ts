export type ErrorResponseObject = {
  [key: string]: { msg: string; statusCode: number };
};

const ErrorCatalog: ErrorResponseObject = {
  contentNotFound: {
    msg: "O conteúdo com o Id buscado não existe!",
    statusCode: 404,
  },
  invalidFields: {
    msg: "O título é obrigatório e deve possuir mais de 4 caracteres!",
    statusCode: 400,
  },
  contentsNotFound: {
    msg: "Não existem conteúdos com esse título!",
    statusCode: 404,
  },
};

export default ErrorCatalog;
