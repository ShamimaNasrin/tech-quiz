import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const data = useLoaderData();
    const topics = data.data;

    return (
        <div className='chart-container'>
            <h2 className='chart-text'>Total quiz chart:</h2>
            
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart width={500} height={400} data={topics}>
                        <Line type="monotone" dataKey="total" stroke="#707070" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </LineChart>
                </ResponsiveContainer>
           
        </div>
    );
};

export default Statistics;