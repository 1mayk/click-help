import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import ErrorCatalog from "../errors/errorsCatalog";

const errorHandler: ErrorRequestHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { message } = error;

  if (ErrorCatalog[message]) {
    const { msg, statusCode } = ErrorCatalog[message];
    return res.status(statusCode).json({ message: msg });
  }

  return res.status(500).json({ message });
};

export default errorHandler;
