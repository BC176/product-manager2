import axios from "axios";
import React, { useState } from "react";

const ProductForm = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const { formSubmittedBoolen, setFormSubmittedBoolean } = props;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newProductInfo = {
            name: name,
            price: price,
            description: description,
        };

        axios
            .post("http://localhost:8000/api/product", newProductInfo)
            .then(response => {
                setName("");
                setPrice("");
                setDescription("");
                setFormSubmittedBoolean(!formSubmittedBoolen);
            })
            .catch((err) => { console.log(err) }
            );
    };
    return (
        <>
            <h5>Product Form</h5>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Product Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <div>
                    <label htmlFor="price">Price: $</label>
                    <input
                        type="text"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </div>
                <div>
                    <label htmlFor="description">Product Description: </label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    // id="description"
                    >
                    </input>
                </div>
                <div className="center">
                    <button>Submit New Product</button>
                </div>
            </form>
            {errors
                ? Object.keys(errors).map((objKey, index) => (
                    <p key={index}>{errors[objKey].message}</p>
                ))
                : null}
        </>
    );
};

export default ProductForm;