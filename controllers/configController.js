import Config from "../models/Config.js";

const getAllConfig = async (req, res) => {
    try {
        const config = await Config.findOne({}, '-__v');

        res.json([config]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const getByIdConfig = async (req, res) => {
    const configId = req.params.id;

    try {
        const config = await Config.findById(configId);
        if (!config) return res.status(404).json({ error: 'Configuración no encontrada' });

        res.json(config);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const createConfig = async (req, res) => {
    try {
        const config = await Config.findOne({});

        if (config) {
            Object.keys(req.body).forEach((key) => {
                if (config[key] && Array.isArray(config[key])) {
                    config[key] = req.body[key];
                }
            });

            await config.save();
            res.json(config);
        } else {
            // Si no existe, crea un nuevo registro
            const newConfig = new Config(req.body);
            const configSave = await newConfig.save();
            res.json(configSave);
        }
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

        // Reemplaza los valores existentes con los nuevos valores
        Object.keys(updatedData).forEach((key) => {
            config[key] = updatedData[key];
        });

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
