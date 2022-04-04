import React from 'react';
import { Pie, PieChart,  Tooltip } from 'recharts';

const InvestPieChart = () => {
    
const data01 = [
    { name: 'Service A', value: 400 },
    { name: 'Service B', value: 300 },
    { name: 'Service C', value: 300 },
    { name: 'Service D', value: 200 },
  ];
  const data02 = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 100 },
    { name: 'Apr', value: 80 },
    { name: 'May', value: 40 },
    { name: 'Jun', value: 30 },
    { name: 'Jul', value: 50 },
    { name: 'Aug', value: 100 },
    { name: 'Sep', value: 200 },
    { name: 'Oct', value: 150 },
    { name: 'Nov', value: 50 },
    { name: 'Dec', value: 250 },
  ];
    return (
       
      <div className='mb-10'>
           <h2 className='flex justify-center text-blue-600 text-xl'> Investment vs Revenue </h2>
            <PieChart  width={400} height={300}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        <Tooltip></Tooltip>
        </PieChart>
      </div>
   
    );
};

export default InvestPieChart;



