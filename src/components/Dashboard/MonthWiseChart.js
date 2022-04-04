import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const  MonthWiseChart= () => {
    
  const data =  [
        {
            "month": "Mar",
            "investment": 1000,
            "sell": 241,
            "revenue": 104
        },
        {
            "month": "Apr",
            "investment": 2000,
            "sell": 423,
            "revenue": 245
        },
        {
            "month": "May",
            "investment": 5000,
            "sell": 726,
            "revenue": 670
        },
        {
            "month": "Jun",
            "investment": 5000,
            "sell": 529,
            "revenue": 404
        },
        {
            "month": "Jul",
            "investment": 6000,
            "sell": 601,
            "revenue": 509
        },
        {
            "month": "Aug",
            "investment": 7000,
            "sell": 670,
            "revenue": 610
        }
    ]
    
    return (
      
     <div className='mb-10 '>
         <h2 className='flex justify-center text-blue-600 text-xl'> Month Wise Sell  </h2>
           <LineChart  width={400} height={300} data={data}>

<Line  type="monotone" dataKey='revenue' > </Line>
<Line  type="monotone" dataKey='investment' > </Line>
<Tooltip> </Tooltip>
<XAxis dataKey='month'></XAxis>
<YAxis dataKey='sell'></YAxis>

</LineChart>
     </div>

    );
};

export default MonthWiseChart;




