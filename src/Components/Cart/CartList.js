import React from 'react'
import CartCard from './CartCard'
import { useSelector } from 'react-redux'

const CartList = () => {
    const cartItems = useSelector((state) => state.carts)
    return (
        <div className="space-y-6">
            {/* Cart Item */}
            {
                cartItems.length > 0 ? cartItems.map((item, index) => <CartCard key={index} cart={item} />) : <h1>Cart Empty</h1>
            }

            {/* Cart Items Ends */}

        </div>
    )
}

export default CartList