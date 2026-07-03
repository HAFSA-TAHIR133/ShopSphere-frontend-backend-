export const up =  async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { name: "Smartphones", description: "Mobile phones", image: "https://picsum.photos/id/1/300/300", createdAt: new Date(), updatedAt: new Date() },
      { name: "Headphones", description: "Audio devices", image: "https://picsum.photos/id/2/300/300", createdAt: new Date(), updatedAt: new Date() },
      { name: "Laptops", description: "Computing devices", image: "https://picsum.photos/id/3/300/300", createdAt: new Date(), updatedAt: new Date() },
      { name: "Shoes", description: "Footwear", image: "https://picsum.photos/id/4/300/300", createdAt: new Date(), updatedAt: new Date() },
      { name: "Televisions", description: "Smart TVs", image: "https://picsum.photos/id/5/300/300", createdAt: new Date(), updatedAt: new Date() },
    ]);
  }

 export const down = async (queryInterface) => {
    await queryInterface.bulkDelete('Categories', null, {});
  };