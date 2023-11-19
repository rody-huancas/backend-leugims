import Product from '../models/Product.js';
import Service from '../models/Service.js';
import User from '../models/User.js';

export const getCountOfItems = async (req, res) => {
    try {
        const productCount = await Product.countDocuments();
        const serviceCount = await Service.countDocuments();
        const userCount = await User.countDocuments();

        res.json({ productCount, serviceCount, userCount });
    } catch (error) {
        console.error("Error al obtener la cantidad de elementos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


export const getRecentProducts = async (req, res) => {
    try {
        const recentProducts = await Product.find()
            .sort({ createdAt: -1 })
            .limit(10);

        res.json(recentProducts);
    } catch (error) {
        console.error("Error al obtener los últimos productos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const getRecentServices = async (req, res) => {
    try {
        const recentServices = await Service.find()
            .sort({ createdAt: -1 })
            .limit(10);

        res.json(recentServices);
    } catch (error) {
        console.error("Error al obtener los últimos servicios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};