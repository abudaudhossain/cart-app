import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { added } from '../redux/products/actions';

const ProductAddForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        image: '',
        price: 0,
        quantity: 0
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        // console.log("input : ", name, value)
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const productAddHandler = (e) => {
        e.preventDefault();
        // Access form values in formData object
        console.log('Form Data:', formData);
        dispatch(added(formData))
        // You can send the form data to an API or perform other actions here

    }
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={productAddHandler}>
                {/* product name */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input className="addProductInput" id="lws-inputName" type="text" name='name' onChange={handleInputChange} required />
                </div>
                {/* product category */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input className="addProductInput" id="lws-inputCategory" type="text" name='category' onChange={handleInputChange} required />
                </div>
                {/* product image url */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input className="addProductInput" id="lws-inputImage" type="text" name='image' onChange={handleInputChange} required />
                </div>
                {/* price & quantity container */}
                <div className="grid grid-cols-2 gap-8 pb-4">
                    {/* price */}
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" id="lws-inputPrice" name='price' onChange={handleInputChange} required />
                    </div>
                    {/* quantity */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" id="lws-inputQuantity" name='quantity' onChange={handleInputChange} required />
                    </div>
                </div>
                {/* submit button */}
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
        </div>
    )
}

export default ProductAddForm