import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize('OnlineShop', 'postgres', process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;