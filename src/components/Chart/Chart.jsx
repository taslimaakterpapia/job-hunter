import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Chart = ({ data }) => {
    const { name, value } = data;
    return (
        <div>
            <ComposedChart width={200} height={100} data={data} >
                <XAxis dataKey={name}></XAxis>
                <Line dataKey={value}></Line>
            </ComposedChart>

            <ComposedChart
                width={700}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#663399" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="value" stroke="blue" />
            </ComposedChart>
        </div>
    );
};

export default Chart;