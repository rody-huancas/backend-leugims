import Slider from "../models/Slider.js";

const getAllSlider = async (req, res) => {
    try {
        const slider = await Slider.find({}, '-__v');

        res.json(slider);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const getByIdSlider = async (req, res) => {
    const sliderId = req.params.id;

    try {
        const slider = await Slider.findById(sliderId);
        if (!slider) return res.status(404).json({ error: 'Contenido no encontrado' });
        const sliderResponse = {
            _id: slider._id,
            title: slider.title,
            description: slider.description,
            image: slider.image,
        };

        res.json(sliderResponse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const createSlider = async (req, res) => {
    try {
        const slider = new Slider(req.body);
        const sliderSave = await slider.save();

        res.json(sliderSave);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const updateSlider = async (req, res) => {
    const sliderId = req.params.id;
    const updatedData = req.body;
    try {
        const slider = await Slider.findById(sliderId);
        if (!slider) return res.status(400).json({ error: 'Contenido no encontrado' });

        Object.assign(slider, updatedData);
        await slider.save();
        res.json({ slider });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const deleteSlider = async (req, res) => {
    const sliderId = req.params.id;
    try {
        const deletedSlider = await Slider.findByIdAndRemove(sliderId);
        if (!deletedSlider) return res.status(404).json({ error: 'Contenido no encontrada' });
        res.json({ message: 'Contenido eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

export {
    getAllSlider,
    getByIdSlider,
    createSlider,
    updateSlider,
    deleteSlider
}