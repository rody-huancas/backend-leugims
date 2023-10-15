import mongoose from 'mongoose';

const categoryServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
});

const CategoryService = mongoose.model('CategoryService', categoryServiceSchema);

export default CategoryService;
