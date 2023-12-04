import React from 'react'
import CartList from '../Components/Cart/CartList'
import BillDetails from '../Components/Cart/BillDetails'

const Cart = () => {
  return (
    <main class="py-16">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
          <CartList />

          {/* Bill Details */}
          <BillDetails />
        </div>
      </div>
    </main>
  )
}

export default Cart