export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('OrderItems', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    orderId: { type: Sequelize.INTEGER, allowNull: false, 
      references: { model: 'Orders', key: 'id' }, onDelete: 'CASCADE' },
    productId: { type: Sequelize.INTEGER, allowNull: false, 
      references: { model: 'Products', key: 'id' }, onDelete: 'CASCADE' },
    quantity: { type: Sequelize.INTEGER, allowNull: false },
    price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('OrderItems');