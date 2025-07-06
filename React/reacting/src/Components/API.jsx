import React, { useState } from 'react';
import axios from 'axios';

function API() {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const api = ('https://fakestoreapi.com/products');
        axios.get(api)                                                      // axios.get() is used to send a GET request to the server
             .then(products => {
                console.log(products);
                setProducts(products.data)})
             .catch(err => console.error(err));
    }


    const addProducts = () => {
        const api = ('https://fakestoreapi.com/products');
        axios.post(api, {                                                 // axios.post() is used to send a POST request to the server
            id: 21,
            title: 'New Product',
            price: 100,
            description: 'This is a new product.',
            category: 'electronics',
            image: 'https://picsum.photos/200/300',
        })
             .then(added => {
                console.log(added)})
             .catch(err => console.error(err));
             }

  return (
    <div className='px-5'>
        <button onClick={getProducts} className='px-3 mt-5 text-lg bg-red-300 rounded'>Click to get Products</button>
        <br /><br/>
        <button onClick={addProducts} className='px-3 mb-4 text-lg bg-red-300 rounded'>Click to add Products</button>

        <hr />

        <ul className='px-3 mt-10'>

            {products.length > 0 ? products.map((item, index) => <li key={index} className='mb-3 p-3 w-[70%] bg-red-200 rounded'> {item.title} </li>) : <h1>Loading...</h1>}

        </ul>
        
    </div>
  )
}

export default API;