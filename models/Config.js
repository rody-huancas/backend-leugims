import mongoose from 'mongoose';

const configSchema = mongoose.Schema({
    addresses: {
        type: [String],
        default: [],
        trim: true
    },
    phones: {
        type: [String],
        default: [],
        trim: true
    },
    email: {
        type: [String],
        default: [],
        trim: true
    },
    facebook: {
        type: [String],
        default: [],
        trim: true
    },
    instagram: {
        type: [String],
        default: [],
        trim: true
    },
    city: {
        type: [String],
        default: [],
        trim: true
    },
    logo: {
        type: [String],
        default: [],
        trim: true
    }
}, {
    timestamps: true
});

const Config = mongoose.model('Config', configSchema);
export default Config;
