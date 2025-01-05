import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationError } from "express-validator";
import { HttpStatus } from "../shared/enums";

export const validateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const customErrors = error.array().map((err: ValidationError) => ({
      message: err.msg,
    }));
    return next({
      code: HttpStatus.BAD_REQUEST,
      error: customErrors,
    });
  }
  next();
};
