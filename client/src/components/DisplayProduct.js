import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";

const DisplayProduct = (props) => {
    const { productID } = props;
    const [productInfo, setProductInfo] = useState();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${productID}`)
            .then((queriedProduct) => {
                console.log(queriedProduct.data.product);
                setProductInfo(queriedProduct.data.product);
            })
            .catch((err) => console.log(err.response));
    }, []);

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/product/${id}`)
            .then((response) => {
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {productInfo ? (
                <div>
                    <h1>Display Product</h1>
                    <p>{productInfo.name}</p>
                    <p>{productInfo.price}</p>
                    <p>{productInfo.description}</p>
                    <button onClick={() => deleteProduct(productInfo._id)}>
                        Delete Product
                    </button>
                    <h5><Link to={`/`}>Return Home</Link></h5>
                </div>
            ) : (
                <h1>Loading Products</h1>
            )}
        </>
    );
};

export default DisplayProduct;