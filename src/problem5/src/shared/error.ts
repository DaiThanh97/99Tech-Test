import { HttpStatus } from "./enums";

export class CustomError extends Error {
  status: HttpStatus;
  errors: {};

  constructor(status: HttpStatus, message: string, errors = {}) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}
