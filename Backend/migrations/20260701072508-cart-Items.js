export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('CartItems', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    cartId: { type: Sequelize.INTEGER, allowNull: false, 
      references: { model: 'Carts', key: 'id' }, onDelete: 'CASCADE' },
    productId: { type: Sequelize.INTEGER, allowNull: false,
      references: { model: 'Products', key: 'id' }, onDelete: 'CASCADE' },
    quantity: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('CartItems');