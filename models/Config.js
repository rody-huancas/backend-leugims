import mongoose from 'mongoose';

const configSchema = mongoose.Schema({
    address: {
        type: String,
        default: null,
        trim: true
    },
    phone: {
        type: String,
        default: null,
        trim: true
    },
    email: {
        type: String,
        default: null,
        trim: true
    },
    facebook: {
        type: String,
        default: null,
        trim: true
    },
    instagram: {
        type: String,
        default: null,
        trim: true
    },
    city: {
        type: String,
        default: null,
        trim: true
    },
    logo: {
        type: String,
        default: null,
        trim: true
    }
});

const Config = mongoose.model('Config', configSchema);
export default Config;
