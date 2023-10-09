import express from 'express';
import dotenv from 'dotenv';
import conectionDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();

// Conexión a la bd
conectionDB();

// Rutas
app.use('/api/user', userRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server listening on 4000");
});