import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const loginAndGenerateToken = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar al usuario por su email
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: 'La cuenta no existe' });

        // Validar contraseña
        const isPasswordValid = await user.verifyPassword(password);
        if (!isPasswordValid) return res.status(401).json({ error: 'La contraseña es incorrecta' });

        // Generar un token JWT
        const tokenData = {
            userId: user._id,
            name: user.name,
            lastname: user.lastname,
            dni: user.dni,
            phone: user.phone,
            address: user.address,
            email: user.email
        };

        const token = jwt.sign(tokenData, 'secreto', { expiresIn: '30d' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export { loginAndGenerateToken };
