import React from 'react';
// import './Category.css'

const Category = ({ job }) => {
    const { img, title, number } = job;
    return (
        <div className='mx-6 pl-4 text-center py-2'>

            <div class="p-5 flex flex-col items-center text-white rounded-3xl bg-gradient-to-r  from-orange-800 via-orange-500  to-orange-400 ">

                <img className='rounded-md w-[70px] text-center pb-2' src={img} alt="" />
                <h5 className='text-2xl font-medium text-'>{title}</h5>
                <p className='text-xl'>
                    {number}+ jobs available
                </p>

            </div>
            

        </div>
    );
};

export default Category;