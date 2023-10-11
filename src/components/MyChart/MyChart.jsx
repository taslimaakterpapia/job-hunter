import React, { useEffect, useState } from 'react';
import './MyChart.css'
import Chart from '../Chart/Chart';



const MyChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('data.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
    return (
        <div className=' ml-72'>
            <Chart data={data}></Chart>
        </div>
    );
};

export default MyChart;