export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Carts', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: Sequelize.INTEGER, allowNull: false, unique: true, 
      references: { model: 'Users', key: 'id' }, onDelete: 'CASCADE' },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('Carts');