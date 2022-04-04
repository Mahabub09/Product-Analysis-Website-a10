import React from 'react';
import BarChartData from '../BarChartData/BarChartData';
import LineChartData from '../LineChartData/LineChartData';

const Dashboard = () => {
    return (
        <div className='flex mt-12 ml-36'>
            <div className='mr-16'>
                <h1 className='font-medium text-xl text-sky-700'>MONTH WISE SELL</h1>
                <BarChartData></BarChartData>

            </div>
            <div>
                <h1 className='font-medium text-xl text-sky-700'>INVESTMENT VS REVENUE</h1>
                <LineChartData></LineChartData>

            </div>
        </div>
    );
};

export default Dashboard;