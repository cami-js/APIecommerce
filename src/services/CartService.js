import Cart from '../models/Cart.js';

class CartService {
    async findByUserId(userId) {
        return await Cart.findOne({ user: userId }).populate('products.product');
    }

    async create(cart) {
        return await Cart.create(cart);
    }

    async update(userId, productId, quantity) {
        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            const newCart = { user: userId, products: [{ product: productId, quantity }] };
            return await Cart.create(newCart);
        }

        const productIndex = cart.products.findIndex(item => item.product.toString() === productId);

        if (productIndex >= 0) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }

        return await cart.save();
    }

    async clear(userId) {
        return await Cart.findOneAndDelete({ user: userId });
    }
}

export default new CartService();
