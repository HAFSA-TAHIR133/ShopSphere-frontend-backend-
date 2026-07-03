// models/RefreshToken.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class RefreshToken extends Model {}

  RefreshToken.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deviceName: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'RefreshToken',
    tableName: 'RefreshTokens',
    timestamps: true,
  });


  return RefreshToken;
};