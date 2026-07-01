export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Reviews', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: Sequelize.INTEGER, allowNull: false, 
      references: { model: 'Users', key: 'id' } },
    productId: { type: Sequelize.INTEGER, allowNull: false, 
      references: { model: 'Products', key: 'id' } },
    rating: { type: Sequelize.SMALLINT, allowNull: false },
    comment: { type: Sequelize.TEXT },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('Reviews');