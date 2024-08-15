import ProductService from "../services/ProductService.js";

class ProductController {
    async getProducts(req, res) {
        try {
            const products = await ProductService.findAll();
            if (!products.length) {
                return res.status(404).json({ message: 'No se han encontrado productos' });
            }
            return res.json(products);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async createProduct(req, res) {
        if (req.user.role !== 'seller') {
            return res.status(403).json({ message: 'No tienes permisos para crear productos' });
        }
        try {
            await ProductService.create(req.body);
            return res.status(201).json({ message: 'Producto creado' });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const updatedProduct = await ProductService.update(req.params.id, req.body);
            return res.json(updatedProduct);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async deleteProduct(req, res) {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'No tienes permisos para eliminar productos' });
        }
        try {
            await ProductService.delete(req.params.id);
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

export default new ProductController();
