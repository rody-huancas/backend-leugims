import CategoryService from '../models/CategoryService.js';

const createCategoryService = async (req, res) => {
    try {
        const categoryServiceData = req.body;
        const createdCategoryService = await CategoryService.create(categoryServiceData);
        res.json(createdCategoryService);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getAllCategoryServices = async (req, res) => {
    try {
        const categoryServices = await CategoryService.find();
        res.json(categoryServices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getCategoryServiceById = async (req, res) => {
    try {
        const categoryServiceId = req.params.id;
        const categoryService = await CategoryService.findById(categoryServiceId);
        if (!categoryService) {
            res.status(404).json({ error: 'Categoría de servicio no encontrada' });
        } else {
            res.json(categoryService);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const updateCategoryService = async (req, res) => {
    try {
        const categoryServiceId = req.params.id;
        const categoryServiceData = req.body;
        const updatedCategoryService = await CategoryService.findByIdAndUpdate(categoryServiceId, categoryServiceData, { new: true });
        if (!updatedCategoryService) {
            res.status(404).json({ error: 'Categoría de servicio no encontrada' });
        } else {
            res.json(updatedCategoryService);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const deleteCategoryService = async (req, res) => {
    try {
        const categoryServiceId = req.params.id;
        await CategoryService.findByIdAndDelete(categoryServiceId);
        res.json({ message: 'Categoría de servicio eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export {
    getAllCategoryServices,
    createCategoryService,
    updateCategoryService,
    deleteCategoryService,
    getCategoryServiceById
}