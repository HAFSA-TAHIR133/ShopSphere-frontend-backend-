export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('ProductImages', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Products', key: 'id' },
      onDelete: 'CASCADE',
    },
    imageUrl: { type: Sequelize.STRING(500), allowNull: false },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('ProductImages');