import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

const Products = () => {
    const products = useSelector((state) => state.products);
    console.log("Product: ", products)
    return (

        <div className="productContainer" id="lws-productContainer">
            {
                products.map((product, index) => <Product key={index} product={product} />)
            }

        </div>

    )
}

export default Products