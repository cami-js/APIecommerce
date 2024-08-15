import { Router } from 'express';
import { check } from 'express-validator';
import CartController from '../controllers/carts.controllers.js';

const router = Router();

router.get('/cart', CartController.getCart);
router.post('/cart', [
    check('productId', 'El ID del producto es obligatorio').not().isEmpty(),
    check('quantity', 'La cantidad es obligatoria y debe ser un número').isNumeric(),
], CartController.addToCart);
router.delete('/cart', CartController.clearCart);

export default router;

