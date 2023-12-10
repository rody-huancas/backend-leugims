import CategoryService from '../models/CategoryService.js';
import Service from '../models/Service.js';

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
        const categoryService = await CategoryService.findById(categoryServiceId);
        if (!categoryService) {
            return res.status(404).json({ error: 'Categoría de servicio no encontrada' });
        }

        const services = await Service.countDocuments({ categoryService: categoryService._id });
        if (services > 0) {
            return res.status(400).json({ error: 'No se puede eliminar la categoría de servicio porque tiene servicios asociados' });
        }

        await categoryService.deleteOne({ _id: categoryService._id });
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