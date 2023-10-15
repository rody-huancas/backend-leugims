import User from "../models/User.js";

// funciones para el usuario
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password -__v');

        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const userResponse = {
            _id: user._id,
            name: user.name,
            lastname: user.lastname,
            dni: user.dni,
            phone: user.phone,
            address: user.address,
            email: user.email,
        };

        res.json(userResponse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const registerUser = async (req, res) => {
    const { email } = req.body;

    // Prevenir usuarios duplicados
    const existsUser = await User.findOne({ email });
    if (existsUser) {
        const error = new Error('El usuario ya está registrado')
        return res.status(400).json({ error: error.message });
    }

    try {
        // Guardar un nuevo usuario
        const user = new User(req.body);
        const userSave = await user.save();

        res.json(userSave);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    // obtener el id
    const userId = req.params.id;
    const updatedData = req.body;

    try {
        const user = await User.findById(userId);
        // Si el usuario no existe
        if (!user) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        // Verificar si se está intentando cambiar el correo electrónico
        if (updatedData.email && updatedData.email !== user.email) {
            const existsEmail = await User.findOne({ email: updatedData.email });
            if (existsEmail) {
                return res.status(400).json({ error: 'El correo ya está en uso' });
            }
        }

        // Actualizar todas las propiedades del usuario
        Object.assign(user, updatedData);

        // Guardar los cambios
        await user.save();

        res.json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        // Busca y elimina al usuario por su ID
        const deletedUser = await User.findByIdAndRemove(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


// const loginUser = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Buscar al usuario por su email
//         const user = await User.findOne({ email });
//         if (!user) return res.status(401).json({ error: 'La cuenta no existe' });

//         // validar contraseña
//         const isPasswordValid = await user.verifyPassword(password);
//         if (!isPasswordValid) return res.status(401).json({ error: 'La contraseña es incorrecta' });

//         const userResponse = {
//             _id: user._id,
//             name: user.name,
//             lastname: user.lastname,
//             dni: user.dni,
//             phone: user.phone,
//             address: user.address,
//             email: user.email,
//         };

//         res.json({ user: userResponse });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }
// };

export {
    getAllUsers,
    getUserById,
    registerUser,
    updateUser,
    deleteUser,
    // loginUser
}