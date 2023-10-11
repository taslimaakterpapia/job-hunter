import React from 'react';
import MyChart from '../MyChart/MyChart';

const Statistics = () => {
    return (
        <div>
            <div className='text-center'>
            <h2 className='pt-24  text-4xl font-bold bg-gradient-to-r from-orange-800 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text pb-3'>This is our Statistics and ReChart page</h2>
            </div>
           <div className='ml-24'>
           <MyChart></MyChart>
           </div>
        </div>
    );
};

export default Statistics;