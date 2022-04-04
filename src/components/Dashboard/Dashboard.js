import React from 'react';
import InvestBarChart from './InvestBarChart';
import InvestPieChart from './InvestPieChart';
import MonthWiseChart from './MonthWiseChart';

const Dashboard = () => {
    return (
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-24 mt-9'>
            
            <MonthWiseChart></MonthWiseChart>
            <InvestBarChart></InvestBarChart>
            <InvestPieChart></InvestPieChart>
        </div>
    );
};

export default Dashboard;