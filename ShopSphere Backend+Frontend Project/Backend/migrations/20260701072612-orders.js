export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Orders', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: Sequelize.INTEGER, allowNull: false, 
      references: { model: 'Users', key: 'id' } },
    addressId: { type: Sequelize.INTEGER, allowNull: false, 
      references: { model: 'Addresses', key: 'id' } },
    totalPrice: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    paymentMethod: { type: Sequelize.ENUM('cash', 'card'), allowNull: false },
    status: { type: Sequelize.ENUM('pending','confirmed','shipped','delivered','cancelled'), defaultValue: 'pending' },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('Orders');