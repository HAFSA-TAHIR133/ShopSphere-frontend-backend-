export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Products', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: false },
    price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    stock: { type: Sequelize.INTEGER, defaultValue: 0 },
    discount: { type: Sequelize.DECIMAL(5, 2), defaultValue: 0 },
    thumbnail: { type: Sequelize.STRING(500), allowNull: true },
    sellerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Users', key: 'id' },
      onDelete: 'CASCADE',
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Categories', key: 'id' },
      onDelete: 'CASCADE',
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Products');
};