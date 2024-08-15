import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './src/config/conf.js';
import productRoutes from './src/routes/productos.routes.js';
import userRoutes from './src/routes/users.routes.js';
import transactionRoutes from './src/routes/transactions.routes.js';
import cartRoutes from './src/routes/cart.routes.js';
import { dbConnection } from './src/db/connection.js';
import { authenticate } from './src/middleware/authenticate.js';
import { errorHandler } from './src/middleware/errorHandler.js';

const app = express();

// Conectar a la base de datos
dbConnection();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Middleware de autenticación
app.use(authenticate); // Aplicar autenticación globalmente

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/cart', cartRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

