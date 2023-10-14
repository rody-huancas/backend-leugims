import mongoose from 'mongoose';

const aboutSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        default: null
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
})

const About = mongoose.model('About', aboutSchema);
export default About;
