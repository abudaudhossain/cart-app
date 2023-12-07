import React, { useState } from 'react'
import Products from '../Components/Products/Index'
import ProductAddForm from '../Components/ProductAddForm';

const Home = () => {
 
  return (
    <main className="py-16">
      <div className="productWrapper">
        <Products />

        <div>
          {/* Product Input Form */}
          <ProductAddForm />
          {/*  Product Input Form Ends */}
        </div>
      </div>
    </main>
  )
}

export default Home