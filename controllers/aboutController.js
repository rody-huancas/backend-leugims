import About from '../models/About.js';

const getAllAbout = async (req, res) => {
    try {
        const about = await About.find({}, '-__v');

        res.json(about);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const getByIdAbout = async (req, res) => {
    const aboutId = req.params.id;

    try {
        const about = await About.findById(aboutId);
        if (!about) return res.status(404).json({ error: 'No se encontró el recurso' });

        const aboutResponse = {
            _id: about._id,
            title: about.title,
            description: about.description,
            mision: about.mision,
            vision: about.vision,

        };
        res.json(aboutResponse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const createAbout = async (req, res) => {
    try {
        const about = new About(req.body);
        const aboutSave = await about.save();

        res.json(aboutSave);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const updateAbout = async (req, res) => {
    const aboutId = req.params.id;
    const updatedData = req.body;

    try {
        const about = await About.findById(aboutId);
        if (!about) return res.status(400).json({ error: 'Configuración no encontrada' });

        Object.assign(about, updatedData);
        await about.save();
        res.json({ about });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const deleteAbout = async (req, res) => {
    const aboutId = req.params.id;
    try {
        const deletedAbout = await About.findByIdAndRemove(aboutId);
        if (!deletedAbout) return res.status(404).json({ error: 'Recurso no encontrado' });
        res.json({ message: 'Recurso eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

export {
    getAllAbout,
    getByIdAbout,
    createAbout,
    updateAbout,
    deleteAbout
}