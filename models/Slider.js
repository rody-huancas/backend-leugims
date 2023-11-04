import mongoose from 'mongoose';

const sliderSchema = mongoose.Schema({
    title: {
        type: String,
        default: null,
        trim: true,
        required: true
    },
    description: {
        type: String,
        default: null,
        trim: true
    },
    image: {
        type: String,
        default: null,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

const Slider = mongoose.model('Slider', sliderSchema);
export default Slider;
