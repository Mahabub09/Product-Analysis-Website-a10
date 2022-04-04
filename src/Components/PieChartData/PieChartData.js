import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const PieChartData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => setData(data.data))

    }, [])
    return (
        <PieChart width={500} height={300}>
            <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />

            <Tooltip></Tooltip>
        </PieChart>

    );
};

export default PieChartData;