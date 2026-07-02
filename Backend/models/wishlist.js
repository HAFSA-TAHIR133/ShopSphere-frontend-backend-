// models/Wishlist.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Wishlist extends Model {}

  Wishlist.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Wishlist',
    tableName: 'Wishlists',
    timestamps: true,
  });


  return Wishlist;
};