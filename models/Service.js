import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    categoryService: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoryService',
    },
}, {
    timestamps: true
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;
