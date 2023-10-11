import express from 'express';
import dotenv from 'dotenv';
import conectionDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import configRoutes from './routes/configRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();

// Conexión a la bd
conectionDB();

// Rutas
app.use('/api/user', userRoutes);
app.use('/api/config', configRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server listening on 4000");
});