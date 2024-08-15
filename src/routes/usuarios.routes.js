import { Router } from 'express';
import { check } from 'express-validator';
import UserController from '../controllers/users.controllers.js';

const router = Router();

router.get('/users', UserController.getUsers);
router.post('/user', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
], UserController.createUser);
router.put('/user/:id', [
    check('username', 'El nombre de usuario es obligatorio').optional().not().isEmpty(),
    check('email', 'El correo es obligatorio').optional().isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').optional().isLength({ min: 6 }),
], UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

export default router;

