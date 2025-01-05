import { Router } from "express";
import items from "./modules/items/items.controller";

const router = Router();

export default (): Router => {
  items(router);
  return router;
};
