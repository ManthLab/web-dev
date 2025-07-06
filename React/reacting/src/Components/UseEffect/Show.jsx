
import React, { useEffect, useState } from 'react'
import axios from '../../utils/Axios';

function Show() {

    
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        /* const api = ('https://fakestoreapi.com/products'); */

        axios.get('/products')                                                      // axios.get() is used to send a GET request to the server
             .then(products => {
                console.log(products);
                setProducts(products.data)})
             .catch(err => console.error(err));
    }


    useEffect(() => {                                                      // useEffect() is used to run a function after rendering the component
      getProducts();                                                      // Directly shows the Products on the page without clicking the button.                       
    },[]);


  return (
     <div className='px-5'>
        <button onClick={getProducts} className='px-3 mt-5 text-lg bg-red-300 rounded'>Click to get Products</button>
        <br /><br/>

        <hr />

        <ul className='px-3 mt-10'>

            {products.length > 0 ? products.map((item, index) => <li key={index} className='mb-3 p-3 w-[70%] bg-red-200 rounded'> {item.title} </li>) : <h1>Loading...</h1>}

        </ul>
        
    </div>
  )
}

export default Show;