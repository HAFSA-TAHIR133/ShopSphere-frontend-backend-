export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    role: {
      type: Sequelize.ENUM('admin', 'seller', 'customer'),
      defaultValue: 'customer',
    },
    profileImage: {
      type: Sequelize.STRING(500),
      allowNull: true,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    status: {
      type: Sequelize.ENUM('active', 'blocked'),
      defaultValue: 'active',
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable('Users');
};