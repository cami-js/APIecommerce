import CartService from '../services/CartService.js';

class CartController {
    async getCart(req, res) {
        try {
            const cart = await CartService.findByUserId(req.user.id);
            if (!cart) {
                return res.status(404).json({ message: 'Carrito no encontrado' });
            }
            return res.json(cart);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async addToCart(req, res) {
        try {
            const { productId, quantity } = req.body;
            const cart = await CartService.update(req.user.id, productId, quantity);
            return res.json(cart);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async clearCart(req, res) {
        try {
            await CartService.clear(req.user.id);
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

export default new CartController();
