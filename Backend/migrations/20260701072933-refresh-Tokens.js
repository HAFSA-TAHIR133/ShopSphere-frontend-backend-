export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('RefreshTokens', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' }, onDelete: 'CASCADE' },
    token: { type: Sequelize.TEXT, allowNull: false },
    expiresAt: { type: Sequelize.DATE, allowNull: false },
    deviceName: { type: Sequelize.STRING(100) },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('RefreshTokens');