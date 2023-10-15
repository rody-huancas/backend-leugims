import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const verifyToken = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, 'secreto');
            const user = await User.findById(decoded.userId).select("-password -token -confirmado");

            if (!user) {
                return res.status(403).json({ error: 'Usuario no encontrado' });
            }

            req.user = user; // Almacena los datos del usuario decodificado en req
            next();
        } catch (error) {
            const errorToken = new Error("Token no válido.");
            return res.status(403).json({ msg: errorToken.message });
        }
    } else {
        const error = new Error("Token no válido o inexistente.");
        res.status(403).json({ msg: error.message });
    }
};

export { verifyToken };
