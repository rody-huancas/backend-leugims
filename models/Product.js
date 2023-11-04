import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
export default Product;
