export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      { title: "Samsung Galaxy S23", description: "Latest Samsung flagship with amazing camera", price: 799.99, stock: 50, discount: 8, thumbnail: "https://picsum.photos/id/20/300/300", sellerId: 8, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: "iPhone 15 Pro", description: "Apple's latest flagship phone", price: 999.99, stock: 35, discount: 0, thumbnail: "https://picsum.photos/id/21/300/300", sellerId: 8, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: "Sony WH-1000XM5 Headphones", description: "Best noise cancelling headphones", price: 349.99, stock: 80, discount: 15, thumbnail: "https://picsum.photos/id/22/300/300", sellerId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: "Dell XPS 13 Laptop", description: "Ultra thin and powerful laptop", price: 1099.99, stock: 20, discount: 10, thumbnail: "https://picsum.photos/id/23/300/300", sellerId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: "Nike Air Max 270", description: "Comfortable casual sneakers", price: 129.99, stock: 120, discount: 20, thumbnail: "https://picsum.photos/id/24/300/300", sellerId: 8, categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
      { title: "Samsung 55 inch 4K Smart TV", description: "Crystal clear display smart TV", price: 599.99, stock: 25, discount: 12, thumbnail: "https://picsum.photos/id/25/300/300", sellerId: 8, categoryId: 5, createdAt: new Date(), updatedAt: new Date() },
      { title: "MacBook Air M3", description: "Lightweight and powerful laptop", price: 1299.99, stock: 18, discount: 5, thumbnail: "https://picsum.photos/id/26/300/300", sellerId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: "Sony Alpha A7 IV Camera", description: "Professional mirrorless camera", price: 2499.99, stock: 12, discount: 0, thumbnail: "https://picsum.photos/id/27/300/300", sellerId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: "Adidas Running Shoes", description: "Lightweight sports shoes", price: 89.99, stock: 95, discount: 25, thumbnail: "https://picsum.photos/id/28/300/300", sellerId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: "iPad Air 5th Generation", description: "Powerful tablet for work & study", price: 599.99, stock: 40, discount: 10, thumbnail: "https://picsum.photos/id/29/300/300", sellerId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      
      { title: "Samsung Galaxy Watch 6", description: "Smart watch with health features", price: 299.99, stock: 60, discount: 15, thumbnail: "https://picsum.photos/id/30/300/300", sellerId: 8, categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
      { title: "Wireless Gaming Mouse", description: "High precision gaming mouse", price: 49.99, stock: 150, discount: 30, thumbnail: "https://picsum.photos/id/50/300/300", sellerId: 8, categoryId: 5, createdAt: new Date(), updatedAt: new Date() },
      { title: "RGB Mechanical Keyboard", description: "Best gaming keyboard", price: 79.99, stock: 85, discount: 18, thumbnail: "https://picsum.photos/id/32/300/300", sellerId: 8, categoryId: 5, createdAt: new Date(), updatedAt: new Date() },
      { title: "Power Bank 20000mAh", description: "Fast charging portable charger", price: 34.99, stock: 200, discount: 22, thumbnail: "https://picsum.photos/id/33/300/300", sellerId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: "JBL Bluetooth Speaker", description: "Portable waterproof speaker", price: 119.99, stock: 55, discount: 10, thumbnail: "https://picsum.photos/id/34/300/300", sellerId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: "Ergonomic Office Chair", description: "Comfortable work chair", price: 249.99, stock: 30, discount: 15, thumbnail: "https://picsum.photos/id/35/300/300", sellerId: 8, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: "Smart LED Bulb", description: "Color changing WiFi bulb", price: 15.99, stock: 300, discount: 40, thumbnail: "https://picsum.photos/id/36/300/300", sellerId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: "DSLR Camera Bag", description: "Large professional camera bag", price: 45.99, stock: 70, discount: 25, thumbnail: "https://picsum.photos/id/37/300/300", sellerId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: "Insulated Water Bottle", description: "Stainless steel water bottle", price: 24.99, stock: 180, discount: 20, thumbnail: "https://picsum.photos/id/38/300/300", sellerId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: "Wireless Earbuds", description: "Noise cancelling earbuds", price: 89.99, stock: 110, discount: 12, thumbnail: "https://picsum.photos/id/39/300/300", sellerId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },

      { title: "27 Inch Gaming Monitor", description: "144Hz high speed monitor", price: 329.99, stock: 22, discount: 8, thumbnail: "https://picsum.photos/id/40/300/300", sellerId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: "Premium Yoga Mat", description: "Non-slip exercise mat", price: 29.99, stock: 140, discount: 35, thumbnail: "https://picsum.photos/id/41/300/300", sellerId: 8, categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
      { title: "Automatic Coffee Maker", description: "Drip coffee machine", price: 89.99, stock: 38, discount: 18, thumbnail: "https://picsum.photos/id/42/300/300", sellerId: 8, categoryId: 5, createdAt: new Date(), updatedAt: new Date() },
      { title: "Laptop Backpack", description: "Water resistant laptop bag", price: 54.99, stock: 65, discount: 22, thumbnail: "https://picsum.photos/id/43/300/300", sellerId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: "Electric Toothbrush", description: "Smart sonic toothbrush", price: 69.99, stock: 90, discount: 15, thumbnail: "https://picsum.photos/id/44/300/300", sellerId: 8, categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
      { title: "Portable SSD 1TB", description: "Fast external storage", price: 109.99, stock: 45, discount: 10, thumbnail: "https://picsum.photos/id/45/300/300", sellerId: 8, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: "Kids Smart Watch", description: "GPS kids smart watch", price: 59.99, stock: 75, discount: 25, thumbnail: "https://picsum.photos/id/46/300/300", sellerId: 8, categoryId: 5, createdAt: new Date(), updatedAt: new Date() },
      { title: "Robot Vacuum Cleaner", description: "Smart floor cleaning robot", price: 299.99, stock: 15, discount: 12, thumbnail: "https://picsum.photos/id/47/300/300", sellerId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { title: "Wireless Charger", description: "Fast wireless charging stand", price: 39.99, stock: 130, discount: 30, thumbnail: "https://picsum.photos/id/48/300/300", sellerId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: "Fitness Tracker Band", description: "Health and sports tracker", price: 49.99, stock: 160, discount: 20, thumbnail: "https://picsum.photos/id/49/300/300", sellerId: 8, categoryId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  }

  export const down = async (queryInterface) => {
    await queryInterface.bulkDelete('Products', null, {});
  }