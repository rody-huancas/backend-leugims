import mongoose from 'mongoose';

const aboutSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        default: null,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        default: null
    },
    mision: {
        type: String,
        trim: true,
        default: null
    },
    vision: {
        type: String,
        trim: true,
        default: null
    }
}, {
    timestamps: true
})

const About = mongoose.model('About', aboutSchema);
export default About;
