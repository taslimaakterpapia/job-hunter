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
        <div className='chart'>
            {/* {data.map(dt=><Chart
            dt={dt}
            ></Chart>)} */}
            <Chart data={data}></Chart>
        </div>
    );
};

export default MyChart;