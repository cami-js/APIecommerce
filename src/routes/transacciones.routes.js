import { Router } from 'express';
import { check } from 'express-validator';
import TransactionController from '../controllers/transactions.controllers.js';

const router = Router();

router.get('/transactions', TransactionController.getTransactions);
router.post('/transaction', [
    check('product', 'El producto es obligatorio').not().isEmpty(),
    check('quantity', 'La cantidad es obligatoria y debe ser un número').isNumeric(),
    check('tipo', 'El tipo es obligatorio y debe ser "compra" o "venta"').isIn(['compra', 'venta']),
], TransactionController.createTransaction);
router.put('/transaction/:id', [
    check('product', 'El producto es obligatorio').optional().not().isEmpty(),
    check('quantity', 'La cantidad debe ser un número').optional().isNumeric(),
    check('tipo', 'El tipo debe ser "compra" o "venta"').optional().isIn(['compra', 'venta']),
], TransactionController.updateTransaction);
router.delete('/transaction/:id', TransactionController.deleteTransaction);

export default router;

