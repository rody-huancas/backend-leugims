import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        default: null
    },
    phone: {
        type: String,
        trim: true,
        default: null
    },
    description: {
        type: String,
        trim: true,
        default: null
    }
}, {
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
