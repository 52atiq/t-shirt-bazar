import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const InvestBarChart = () => {
   
const data = [
    {
     month: 'Mar',
      investment: 4000,
     revenue: 2400,
      amt: 2400,
    },
    {
     month: 'Apr',
      investment: 3000,
     revenue: 1398,
      amt: 2210,
    },
    {
     month: 'May',
      investment: 2000,
     revenue: 9800,
      amt: 2290,
    },
    {
     month: 'Jun',
      investment: 2780,
     revenue: 3908,
      amt: 2000,
    },
    {
     month: 'Jul',
      investment: 1890,
     revenue: 4800,
      amt: 2181,
    },
    {
     month: 'Aug',
      investment: 2390,
     revenue: 3800,
      amt: 2500,
    },
    // {
    //  month: 'Page G',
    //   investment: 3490,
    //  revenue: 4300,
    //   amt: 2100,
    // },
  ];
    return (
        // <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
          <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
        </BarChart>
    //   {/* </ResponsiveContainer> */}

    );
};

export default InvestBarChart;


