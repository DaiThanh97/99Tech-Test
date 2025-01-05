import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "./items.service";
import { validateMiddleware } from "../../middlewares/validateRequest";
import { createItemValidation, updateItemValidation } from "./validations";

export default (router: Router) => {
  router.get("/items", getItems);
  router.get("/items/:id", getItem);
  router.post("/items", validateMiddleware, createItemValidation, createItem);
  router.put(
    "/items/:id",
    validateMiddleware,
    updateItemValidation,
    updateItem
  );
  router.delete("/items/:id", validateMiddleware, deleteItem);
};
