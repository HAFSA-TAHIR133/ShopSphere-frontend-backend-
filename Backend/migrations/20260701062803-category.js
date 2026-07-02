export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Categories', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING(100), allowNull: false, unique: true },
    description: { type: Sequelize.TEXT, allowNull: true },
    image: { type: Sequelize.STRING(500), allowNull: true },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Categories');
};