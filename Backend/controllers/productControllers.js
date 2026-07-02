import ProductService from "../services/productServices.js";

class ProductController {

    async getProducts(req, res, next) {

        try {

            const result = await ProductService.getProducts(req.query);

            return res.status(200).json({
                success: true,
                message: "Products fetched successfully",
                products: result.products,
                pagination: result.pagination,
                id:result.id
            });

        } catch (error) {
            next(error);
        }
    }

    // shwoing a single product details

    async getProductById (req, res,next){
    try {
        const { id } = req.params;

        const product = await ProductService.getProductById(id);

        if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
        }

        return res.status(200).json({
        success: true,
        product,
        });
    } catch (error) {
        console.error("Get Product By Id Error:", error);

        return res.status(500).json({
        success: false,
        message: "Server Error",
        });
    }
   }

}

export default new ProductController();