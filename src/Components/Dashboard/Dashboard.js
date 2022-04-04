import React from 'react';
import AreaChartData from '../AreaChartData/AreaChartData';
import BarChartData from '../BarChartData/BarChartData';
import LineChartData from '../LineChartData/LineChartData';
import PieChartData from '../PieChartData/PieChartData';

const Dashboard = () => {
    return (
        <div>
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
            <div className='flex mt-12 ml-36'>
                <div className='mr-16'>
                    <h1 className='font-medium text-xl text-sky-700'>MONTHLY REVENUE In INVESTMENT</h1>
                    <AreaChartData></AreaChartData>
                </div>
                <div>
                    <h1 className='font-medium text-xl text-sky-700'>INVESTMENT WISE SELL</h1>
                    <PieChartData></PieChartData>
                </div>
            </div>
        </div>


    );
};

export default Dashboard;