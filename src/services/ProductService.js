import Product from "../models/Product.js";

class ProductService {
    async findAll() {
        return await Product.find();
    }

    async findById(id) {
        return await Product.findById(id);
    }

    async create(product) {
        return await Product.create(product);
    }

    async update(id, productData) {
        return await Product.findByIdAndUpdate(id, productData, { new: true });
    }

    async delete(id) {
        return await Product.findByIdAndDelete(id);
    }
}

export default new ProductService();
