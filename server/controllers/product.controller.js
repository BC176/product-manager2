const Product = require("../models/product.model");

const addNewProduct = (req, res) => {
    const { body } = req;
    console.log("BODY:", body);
    Product.create(req.body)
        .then((newProduct) => {
            res.json({ newProduct });
        })
        .catch((err) => {
            res.status(400).json({ error: err });
        });
};

const getAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json({ allProducts }))
        .catch((err) => res.status(400).json({ error: err }));
};

const deleteProduct = (req, res) => {
    console.log(req.params.productID);
    Product.deleteOne({ _id: req.params.productID })
        .then((deletedProduct) => res.status(200).send("Product Deleted"))
        .catch((err) => res.status(400).json({ error: err }));
};

const getProductByID = (req, res) => {
    Product.findOne({ _id: req.params.productID })
        .then((product) => res.json({ product }))
        .catch((err) => res.status(400).json({ error: err }));
};

const updateProduct = (req, res) => {
    const { body } = req;
    Product.findOneAndUpdate({ _id: req.params.productID }, body, {
        new: true,
        runValidators: true,
    })
        .then((product) => res.json({ product }))
        .catch((err) => res.status(400).json({ error: err }));
};

module.exports = {
    addNewProduct,
    getAllProducts,
    deleteProduct,
    getProductByID,
    updateProduct,
};