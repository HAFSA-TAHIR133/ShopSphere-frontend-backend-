// models/Cart.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Cart extends Model {}

  Cart.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'Carts',
    timestamps: true,
  });


  return Cart;
};