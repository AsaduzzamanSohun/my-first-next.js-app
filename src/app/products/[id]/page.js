import React from 'react';

const product = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1>This is my fucking product: {params.id}</h1>
            <h1>Product: {searchParams.price}</h1>
        </div>
    );
};

export default product;