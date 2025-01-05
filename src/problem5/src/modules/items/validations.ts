import { check } from "express-validator";

export const createItemValidation = [
  check("name").notEmpty().isLength({ min: 3, max: 15 }).trim(),
  check("description").optional().isLength({ min: 0, max: 255 }).trim(),
  check("quantity").isInt({ min: 0 }),
];

export const updateItemValidation = [
  check("description").optional().isLength({ min: 0, max: 255 }).trim(),
  check("quantity").isInt({ min: 0 }),
];
