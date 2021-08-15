import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const EditProduct = (props) => {
    const { productID } = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${productID}`)
            .then((queriedProduct) => {
                setName(queriedProduct.data.product.name);
                setPrice(queriedProduct.data.product.price);
                setDescription(queriedProduct.data.product.description);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/product/${productID}`, {
                name,
                description,
                price,
            })
            .then((updatedDoc) => navigate("/"))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name:{" "}
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    Price:{" "}
                    <input
                        type="text"
                        name="price"
                        value={price}
                        // defaultValue={price}
                        onChange={(e) => setPrice(e.target.value)}
                        id="price">
                    </input>
                </div>
                <div>
                    Description:{" "}
                    <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <button>Confirm Edit</button>
            </form>
        </div>
    );
};

export default EditProduct;