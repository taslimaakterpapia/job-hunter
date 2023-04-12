import React from 'react';
import './Category.css'

const Category = ({job}) => {
    const {img, title, number} = job;
    return (
        <div className='category'>
            <img src={img} alt="" />
            <h5>{title}</h5>
            <p>
                {number}+ jobs available
            </p>
            
        </div>
    );
};

export default Category;