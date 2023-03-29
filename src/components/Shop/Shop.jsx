import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='shop'> 
            <div>
                <h2>Cart list { products.length }</h2>
            </div>
            <div>
                <h2>Order list</h2>
            </div>
        </div>
    );
};

export default Shop;