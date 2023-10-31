import React from 'react'

const Product = () => {
    return (
        <div class="lws-productCard">
            <img class="lws-productImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
            <div class="p-4 space-y-2">
                <h4 class="lws-productName">Women Winter Clothes</h4>
                <p class="lws-productCategory">Tops</p>
                <div class="flex items-center justify-between pb-2">
                    <p class="productPrice">BDT <span class="lws-price">100</span></p>
                    <p class="productQuantity">QTY <span class="lws-quantity">30</span></p>
                </div>
                <button class="lws-btnAddToCart">Add To Cart</button>
            </div>
        </div>
    )
}

export default Product