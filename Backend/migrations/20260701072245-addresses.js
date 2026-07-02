export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Addresses', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: Sequelize.INTEGER, allowNull: false, 
      references: { model: 'Users', key: 'id' }, onDelete: 'CASCADE' },
    fullName: { type: Sequelize.STRING(100), allowNull: false },
    phone: { type: Sequelize.STRING(20), allowNull: true },
    country: { type: Sequelize.STRING(100) },
    province: { type: Sequelize.STRING(100) },
    city: { type: Sequelize.STRING(100) },
    postalCode: { type: Sequelize.STRING(20) },
    street: { type: Sequelize.STRING(255) },
    isDefault: { type: Sequelize.BOOLEAN, defaultValue: false },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false },
  });
};

export const down = async (queryInterface) => await queryInterface.dropTable('Addresses');