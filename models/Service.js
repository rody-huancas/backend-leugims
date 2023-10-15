import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    categoryService: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoryService',
        required: true,
    },
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;
