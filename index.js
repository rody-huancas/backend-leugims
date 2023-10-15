import express from 'express';
import cors from 'cors'; // Importar el paquete CORS
import dotenv from 'dotenv';
import conectionDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import configRoutes from './routes/configRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';
import sliderRoutes from './routes/sliderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import categoryServiceRoutes from './routes/categoryServiceRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import authRoutes from './routes/authRoutes.js';
import initializeAdmin from './middleware/initializeAdmin.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
initializeAdmin();

// Conexión a la bd
conectionDB();

// Rutas
app.use('/api/user', userRoutes);
app.use('/api/config', configRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/slider', sliderRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/categoryServices', categoryServiceRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/auth', authRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server listening on 4000");
});
