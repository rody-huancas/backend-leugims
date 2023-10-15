import express from 'express';
import dotenv from 'dotenv';
import conectionDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import configRoutes from './routes/configRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';
import sliderRoutes from './routes/sliderRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();

// Conexión a la bd
conectionDB();

// Rutas
app.use('/api/user', userRoutes);
app.use('/api/config', configRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/slider', sliderRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server listening on 4000");
});