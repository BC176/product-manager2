const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
    },
});

module.exports = mongoose.model("Product", ProductSchema);