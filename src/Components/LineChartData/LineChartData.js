import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineChartData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setData(data.data))

    }, [])
    return (
        <LineChart width={500} height={300} data={data}>
            <Line type="monotone" dataKey="investment" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>

        </LineChart>
    );
};

export default LineChartData;