import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import { ValidationError } from "@hapi/joi";
import ErrorCatalog from "../errors/errorsCatalog";

const errorHandler: ErrorRequestHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { message } = error;

  if (error instanceof ValidationError) {
    const { message } = error;
    return res.status(400).json({ message });
  }

  if (ErrorCatalog[message]) {
    const { msg, statusCode } = ErrorCatalog[message];
    return res.status(statusCode).json({ message: msg });
  }

  return res.status(500).json({ message });
};

export default errorHandler;
