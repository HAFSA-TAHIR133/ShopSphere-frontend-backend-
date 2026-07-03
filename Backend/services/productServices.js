import db from "../models/index.js";

const { Product, ProductImage, Category, User } = db;


class ProductService {

    async getProducts(query) {

        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 12;
        const offset = (page - 1) * limit;

        const { count, rows } = await Product.findAndCountAll({
            distinct: true,
            include: [
                {
                    model: ProductImage,
                    attributes: ["imageUrl"],
                },
            ],
            limit,
            offset,
            order: [["createdAt", "DESC"]],
        });

        return {
            products: rows,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(count / limit),
                totalProducts: count,
                hasNextPage: page < Math.ceil(count / limit),
                hasPrevPage: page > 1,
            },
        };
    }

    async getProductById(id){
    return await Product.findByPk(id, {
      include: [
        {
          model: ProductImage,
          attributes: ["imageUrl"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
        {
          model: User,
          as: "Seller",
          attributes: ["firstName", "lastName", "profileImage"],
        },
      ],
    });
  }
}
export default new ProductService();