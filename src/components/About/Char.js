

import React from 'react';
import { Line, LineChart, Tooltip, XAxis } from 'recharts';

const Dashboard = () => {
    
const data = [
    {
      name: 'Supplier A',
     price: 4000,
     sales: 2400,
      amt: 2400,
    },
    {
      name: 'Supplier B',
     price: 3000,
     sales: 1398,
      amt: 2210,
    },
    {
      name: 'Supplier C',
     price: 2000,
     sales: 9800,
      amt: 2290,
    },
    {
      name: 'Supplier D',
     price: 2780,
     sales: 3908,
      amt: 2000,
    },
    {
      name: 'Supplier E',
     price: 1890,
     sales: 4800,
      amt: 2181,
    },
    {
      name: 'Supplier F',
     price: 2390,
     sales: 3800,
      amt: 2500,
    },
    {
      name: 'Supplier G',
     price: 3490,
     sales: 4300,
      amt: 2100,
    },
  ];
    return (
    //   <div className='w-28'>
           <LineChart width={900} height={500} data={data}>
        <Line dataKey='price'> </Line>
        <Line dataKey='sales'> </Line>
        <Tooltip> </Tooltip>
       <XAxis dataKey='name'> </XAxis>
       </LineChart>
    //   </div>
    );
};

export default Dashboard;


const data =[
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]