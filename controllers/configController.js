import Config from "../models/Config.js";

const getAllConfig = async (req, res) => {
    try {
        const config = await Config.find({}, '-__v');

        res.json(config);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const getByIdConfig = async (req, res) => {
    const configId = req.params.id;

    try {
        const config = await Config.findById(configId);
        if (!config) return res.status(404).json({ error: 'Usuario no encontrado' });

        const configResponse = {
            _id: config._id,
            address: config.address,
            phone: config.phone,
            email: config.email,
            facebook: config.facebook,
            instagram: config.instagram,
            city: config.city,
            logo: config.logo,
        };
        res.json(configResponse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const createConfig = async (req, res) => {
    try {
        const config = new Config(req.body);
        const configSave = await config.save();

        res.json(configSave);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const updateConfig = async (req, res) => {
    const configId = req.params.id;
    const updatedData = req.body;
    try {
        const config = await Config.findById(configId);
        if (!config) return res.status(400).json({ error: 'Configuración no encontrada' });

        Object.assign(config, updatedData);
        await config.save();
        res.json({ config });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const deleteConfig = async (req, res) => {
    const configId = req.params.id;
    try {
        const deletedConfig = await Config.findByIdAndRemove(configId);
        if (!deletedConfig) return res.status(404).json({ error: 'Configuración no encontrada' });
        res.json({ message: 'Configuración eliminada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

export {
    getAllConfig,
    getByIdConfig,
    createConfig,
    updateConfig,
    deleteConfig
}