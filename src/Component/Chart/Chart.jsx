import React, { useState } from 'react';
import { Line, LineChart, XAxis,YAxis,Tooltip } from 'recharts';

const Chart = () => {
    // const [total, setTotal] = useState(0)
    // console.log(total);
    const data = [
       {
        name : "AI",
        uv: 0,
        pv: 60
        
       },
       {
        name : "A2",
        uv: 10,
        pv: 60
        
       },
       {
        name : "A3",
        uv: 20,
        pv: 60
       
       },
       {
        name : "A4",
        uv: 30,
        pv: 59
       
       },
       {
        name : "A5",
        uv: 40,
        pv: 60
       
       },
       {
        name : "A6",
        uv: 50,
        pv: 60
       
       },
       {
        name : "A7",
        uv: 60,
        pv: 60
       
       },
    
      
    ]

const sum = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.pv;
  }, 0);
  
  const average = (sum / data.length).toFixed(2);
  
    return (
        <div className='bg-slate-400 lg:w[700] w-[400] text-white pt-6 ml-6'>
            <h3 className='text-left font-bold text-3xl'>Asygnment Analysis </h3>
           <div className='flex py-11'>
             <div>
            <span className='rounded-full text-amber-400 h-30 w-30 bg-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
           <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
             </svg>
            </span>

             </div>
          <div className='text-left '>
          {
          <h3 className='text-2xl font-bold'>{average}</h3>
           }
          <h4>Avareg Assignment Mark</h4>
          </div>
           </div>
             
                <LineChart
                width={700}
                height={500}
                data={data}
                >
                    <XAxis dataKey="name"/>
                    {/* <Line dataKey="uv"/> */}
                    <YAxis dataKey="uv" />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />

                </LineChart>

             
        </div>
    );
};

export default Chart;