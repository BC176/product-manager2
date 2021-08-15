import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const DisplayAllProducts = (props) => {
    const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product")
            .then(
                (allProducts) => {
                    setProducts(allProducts.data.allProducts);
                }
            )
            .catch((err) => console.log(err));
    }, [formSubmittedBoolean]);

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/product/${id}`)
            .then((response) => {
                setFormSubmittedBoolean(!formSubmittedBoolean);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <h5>Display all Products</h5>
            {products.length > 0 &&
                products.map((product, index) => (
                    <div key={index}>
                        <h5>
                            <Link to={`/${product._id}/edit`}>EDIT</Link>
                        </h5>
                        <Link to={`/${product._id}`}>Display Product Info</Link>
                        <p>{product.name}</p>
                        {/* <p>{product.price}</p>
                        <p>{product.description}</p> */}
                        <button onClick={() => deleteProduct(product._id)}>
                            DELETE PRODUCT
                        </button>
                        <hr />
                    </div>
                ))}
        </div>
    );
};

export default DisplayAllProducts;