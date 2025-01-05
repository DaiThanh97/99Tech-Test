require("dotenv").config();
import { DataSource } from "typeorm";
import { ItemEntity } from "../modules/items/entities/item";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [ItemEntity],
  migrations: ["src/migrations/*{.ts,.js}"],
});
