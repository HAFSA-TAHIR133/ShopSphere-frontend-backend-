// models/index.js
import { Sequelize } from 'sequelize';
import UserModel from './user.js';
import CategoryModel from './category.js';
import ProductModel from './product.js';
import ProductImageModel from './productImage.js';
import AddressModel from './address.js';
import CartModel from './cart.js';
import CartItemModel from './cartItem.js';
import OrderModel from './order.js';
import OrderItemModel from './orderItem.js';
import ReviewModel from './review.js';
import WishlistModel from './wishlist.js';
import RefreshTokenModel from './refreshToken.js';
import NotificationModel from './notification.js';
import config from '../config/config.js';


//  Get config based on environment
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions,
    logging: false,
  }
);

const User = UserModel(sequelize);
const Category = CategoryModel(sequelize);
const Product = ProductModel(sequelize);
const ProductImage = ProductImageModel(sequelize);
const Address = AddressModel(sequelize);
const Cart = CartModel(sequelize);
const CartItem = CartItemModel(sequelize);
const Order = OrderModel(sequelize);
const OrderItem = OrderItemModel(sequelize);
const Review = ReviewModel(sequelize);
const Wishlist = WishlistModel(sequelize);
const RefreshToken = RefreshTokenModel(sequelize);
const Notification = NotificationModel(sequelize);

// Define Associations
User.hasMany(Product, { foreignKey: 'sellerId', as: 'Products' });
Product.belongsTo(User, { foreignKey: 'sellerId', as: 'Seller' });

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

Cart.hasMany(CartItem, { foreignKey: 'cartId' });
CartItem.belongsTo(Cart, { foreignKey: 'cartId' });

Product.hasMany(CartItem, { foreignKey: 'productId' });
CartItem.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Address.hasMany(Order, { foreignKey: 'addressId' });
Order.belongsTo(Address, { foreignKey: 'addressId' });

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Wishlist, { foreignKey: 'userId' });
Wishlist.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Wishlist, { foreignKey: 'productId' });
Wishlist.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(RefreshToken, { foreignKey: 'userId' });
RefreshToken.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Notification, { foreignKey: 'userId' });
Notification.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(ProductImage, { foreignKey: 'productId' });
ProductImage.belongsTo(Product, { foreignKey: 'productId' });

export default{
  User, Category, Product, ProductImage, Address,
  Cart, CartItem, Order, OrderItem, Review,
  Wishlist, RefreshToken, Notification, sequelize
};