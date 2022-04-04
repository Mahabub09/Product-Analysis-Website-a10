
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const AreaChartData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setData(data.data))

    }, [])
    return (
        <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <Area type="monotone" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
            <XAxis dataKey='month'></XAxis>
            <YAxis dataKey='investment'></YAxis>
            <Tooltip></Tooltip>

        </AreaChart>
    );
};

export default AreaChartData;