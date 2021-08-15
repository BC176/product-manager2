const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/api/product", ProductController.addNewProduct);
    app.get("/api/product", ProductController.getAllProducts);
    app.delete("/api/product/:productID", ProductController.deleteProduct);
    app.get("/api/product/:productID", ProductController.getProductByID);
    app.put("/api/product/:productID", ProductController.updateProduct);
};