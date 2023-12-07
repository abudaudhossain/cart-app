import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addedCartItem, incrementQuantity } from '../../redux/cart/actions';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    let { name, id, price, quantity, category } = product
    const cartItems = useSelector((state) => state.carts)

    const addToCartHandler = (product) => {
        console.log("product: ", product)
        const idOfCartItem = cartItems.map(item => item.id)
        if (idOfCartItem.includes(product.id)) {
            dispatch(incrementQuantity(product.id))
        } else {

            dispatch(addedCartItem({ ...product }))
        }
    }
    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{name}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
                </div>
                <button className="lws-btnAddToCart" onClick={() => addToCartHandler(product)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product