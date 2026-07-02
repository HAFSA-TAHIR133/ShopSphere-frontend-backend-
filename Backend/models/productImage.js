// models/ProductImage.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class ProductImage extends Model {}

  ProductImage.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ProductImage',
    tableName: 'ProductImages',
    timestamps: true,
  });

  return ProductImage;
};