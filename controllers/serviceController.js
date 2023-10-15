import Service from '../models/Service.js';

const createService = async (req, res) => {
    try {
        const serviceData = req.body;
        const createdService = await Service.create(serviceData);
        res.json(createdService);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getServiceById = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await Service.findById(serviceId);
        if (!service) {
            res.status(404).json({ error: 'Servicio no encontrado' });
        } else {
            res.json(service);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const updateService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const serviceData = req.body;
        const updatedService = await Service.findByIdAndUpdate(serviceId, serviceData, { new: true });
        if (!updatedService) {
            res.status(404).json({ error: 'Servicio no encontrado' });
        } else {
            res.json(updatedService);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        await Service.findByIdAndDelete(serviceId);
        res.json({ message: 'Servicio eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getServicesByCategory = async (req, res) => {
    try {
        const categoryServiceId = req.params.id;
        const services = await Service.find({ categoryService: categoryServiceId });
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export {
    getAllServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
    getServicesByCategory
}