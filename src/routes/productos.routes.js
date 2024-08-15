import { Router } from 'express';
import { check } from 'express-validator';
import ProductController from '../controllers/productos.controllers.js';
import { authorize } from '../middleware/authorize.js';

const router = Router();

// Todos los usuarios pueden ver productos
router.get('/products', ProductController.getProducts);

// Solo admin y vendedor pueden crear productos
router.post('/product', [
    check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
    check('price', 'El precio del producto es obligatorio y debe ser un número').isNumeric(),
    check('category', 'La categoría del producto es obligatoria').not().isEmpty(),
    check('stock', 'El stock del producto debe ser un número').isNumeric(),
], authorize('admin', 'vendedor'), ProductController.createProduct);

// Solo admin y vendedor pueden actualizar productos
router.put('/product/:id', [
    check('name', 'El nombre del producto es obligatorio').optional().not().isEmpty(),
    check('price', 'El precio del producto debe ser un número').optional().isNumeric(),
    check('category', 'La categoría del producto es obligatoria').optional().not().isEmpty(),
    check('stock', 'El stock del producto debe ser un número').optional().isNumeric(),
], authorize('admin', 'vendedor'), ProductController.updateProduct);

// Solo admin puede eliminar productos
router.delete('/product/:id', authorize('admin'), ProductController.deleteProduct);

export default router;
