import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setData(data.data))

    }, [])
    return (

        <BarChart width={500} height={300} data={data}>

            <Bar dataKey="sell" fill="#8884d8" />
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>

        </BarChart>
    );
};

export default Dashboard;