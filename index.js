import express from 'express';
import cors from 'cors'; // Importar el paquete CORS
import initializeAdmin from './middleware/initializeAdmin.js';
import dotenv from 'dotenv';
// dn
import conectionDB from './config/database.js';
// rutas
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import configRoutes from './routes/configRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';
import sliderRoutes from './routes/sliderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import categoryServiceRoutes from './routes/categoryServiceRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// Conexión a la bd
conectionDB();

initializeAdmin();

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/config', configRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/slider', sliderRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/categoryServices', categoryServiceRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/contact', contactRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server listening on 4000");
});