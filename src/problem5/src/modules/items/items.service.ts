import { Request, Response } from "express";
import { asyncMiddleware } from "../../middlewares/asyncHandler";
import { MAX_PER_PAGE } from "../../shared/constants";
import {
  ICreateItem,
  IListItemQuery,
  IListItemResponse,
  IUpdateItem,
  Item,
} from "./items.interface";
import { HttpStatus } from "../../shared/enums";
import { CustomError } from "../../shared/error";
import { ItemRepository } from "./items.repository";

export const getItems = asyncMiddleware(
  async (req: Request, res: Response<IListItemResponse>) => {
    const query = req.query as IListItemQuery;
    const page: number = query.page || 1;
    const perPage: number = query.perPage || MAX_PER_PAGE;

    const [items, count] = await ItemRepository.findAndCountItems(
      perPage,
      perPage * (page - 1)
    );

    // Response
    res.status(HttpStatus.SUCCESS).json({
      count,
      data: items,
    });
  }
);

export const getItem = asyncMiddleware(
  async (req: Request, res: Response<Item>) => {
    const params = req.params;
    const itemId = Number(params.id);

    const item = await ItemRepository.findById(itemId);
    if (!item) {
      throw new CustomError(
        HttpStatus.NOT_FOUND,
        `Item with id ${itemId} is not found!`
      );
    }

    // Response
    res.status(HttpStatus.SUCCESS).json(item);
  }
);

export const createItem = asyncMiddleware(
  async (req: Request, res: Response<Item>) => {
    const { name, quantity, description } = req.body as ICreateItem;
    const itemExisted = await ItemRepository.findByName(name);
    if (itemExisted) {
      throw new CustomError(
        HttpStatus.BAD_REQUEST,
        `Item with name ${name} is already exists.`
      );
    }

    await ItemRepository.createItem({ name, quantity, description });

    // Response
    res.status(HttpStatus.CREATED).json();
  }
);

export const updateItem = asyncMiddleware(
  async (req: Request, res: Response<Item>) => {
    const params = req.params;
    const itemId = Number(params.id);
    const { quantity, description } = req.body as IUpdateItem;

    let item = await ItemRepository.findById(itemId);
    if (!item) {
      throw new CustomError(
        HttpStatus.NOT_FOUND,
        `Item with id ${itemId} is not found!`
      );
    }

    item = await ItemRepository.save({
      ...item,
      description,
      quantity,
    });

    // Response
    res.status(HttpStatus.SUCCESS).json(item);
  }
);

export const deleteItem = asyncMiddleware(
  async (req: Request, res: Response<Item>) => {
    const params = req.params;
    const itemId = Number(params.id);

    const item = await ItemRepository.findById(itemId);
    if (!item) {
      throw new CustomError(
        HttpStatus.NOT_FOUND,
        `Item with id ${itemId} is not found!`
      );
    }

    await ItemRepository.softDelete({
      id: itemId,
    });

    // Response
    res.status(HttpStatus.SUCCESS).json(item);
  }
);
