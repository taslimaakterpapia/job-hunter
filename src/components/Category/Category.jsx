import React from 'react';
import './Category.css'

const Category = ({ job }) => {
    const { img, title, number } = job;
    return (
        <div className='category mx-16 '>

            <div class="card relative h-[260px] w-[300px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r  from-orange-800   via-orange-500    to-orange-400 ">

                <img className='rounded-md' src={img} alt="" />
                <h5 className='text-2xl font-medium text-'>{title}</h5>
                <p className='text-xl'>
                    {number}+ jobs available
                </p>

            </div>
            

        </div>
    );
};

export default Category;