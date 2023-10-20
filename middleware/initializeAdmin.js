import User from '../models/User.js';

const initializeAdmin = async () => {
    try {
        const adminExists = await User.findOne({ email: 'admin@correo.com' });

        if (!adminExists) {
            const admin = new User({
                name: 'Admin',
                email: 'admin@correo.com',
                password: 'Rody_1999',
            });

            await admin.save();
        }
    } catch (error) {
        console.error('Error al inicializar el usuario administrador:', error);
    }
};

export default initializeAdmin;
