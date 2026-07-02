export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Notifications', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' }, onDelete: 'CASCADE' },
    title: { type: Sequelize.STRING(255), allowNull: false },
    message: { type: Sequelize.TEXT, allowNull: false },
    type: { type: Sequelize.ENUM('order','system','promotion'), allowNull: false },
    isRead: { type: Sequelize.BOOLEAN, defaultValue: false },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('Notifications');