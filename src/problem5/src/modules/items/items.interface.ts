export interface Item {
  id: number;
  name: string;
  description?: string;
  quantity: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate?: Date;
}

export interface IListItemQuery {
  page?: number;
  perPage?: number;
}

export interface ICreateItem
  extends Omit<Item, "id" | "createdDate" | "updatedDate" | "deletedDate"> {}

export interface IUpdateItem extends Pick<Item, "description" | "quantity"> {}

export interface IListItemResponse {
  count: number;
  data: Item[];
}
