import Contact from "../models/Contatc.js";

const getAllContact = async (req, res) => {
    try {
        const contact = await Contact.find({}, '-__v');

        res.json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const createContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const contactSave = await contact.save();

        res.json(contactSave);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

const deleteContact = async (req, res) => {
    const contactId = req.params.id;
    try {
        const deletedContact = await Contact.findByIdAndRemove(contactId);
        if (!deletedContact) return res.status(404).json({ error: 'Recurso no encontrado' });
        res.json({ message: 'Recurso eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lo siento, ocurrió un error' });
    }
}

export {
    getAllContact,
    createContact,
    deleteContact
}