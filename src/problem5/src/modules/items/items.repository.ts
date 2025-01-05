import { AppDataSource } from "../../configs/db";
import { ItemEntity } from "./entities/item";
import { Item } from "./items.interface";

export const ItemRepository = AppDataSource.getRepository(ItemEntity).extend({
  findAndCountItems(take: number, skip: number) {
    return this.findAndCount({
      take,
      skip,
      withDeleted: false,
    });
  },
  findById(id: number) {
    return this.findOne({
      where: {
        id,
      },
    });
  },
  findByName(name: string) {
    return this.findOne({
      where: {
        name,
      },
    });
  },
  createItem(item: Partial<Item>) {
    const { name, description, quantity } = item;
    return this.createQueryBuilder()
      .insert()
      .into(ItemEntity)
      .values([{ id: 0, name, description, quantity }])
      .execute();
  },
});
