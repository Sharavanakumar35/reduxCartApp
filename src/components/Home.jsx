// Homepage.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Homepage = () => {
    const products = useSelector(state => state.products);

    return (
        <div className="homepage">
            <div className="products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;
