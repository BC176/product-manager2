const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
app.use(cors());

require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));

const AllProductRoutes = require("./routes/product.routes");
AllProductRoutes(app);

app.listen(port, () => console.log("Express is listening on", { port }));