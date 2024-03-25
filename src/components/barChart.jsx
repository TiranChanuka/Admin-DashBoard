import React from 'react'
import { BarChart, Bar, ResponsiveContainer } from 'recharts'

const data = [
    { month: '01', value: 11 },
    { month: '02', value: 15 },
    { month: '03', value: 5 },
    { month: '04', value: 23 },
    { month: '05', value: 18 },
    { month: '06', value: 10 },
    { month: '01', value: 11 },
    { month: '02', value: 15 },
    { month: '03', value: 5 },
    { month: '04', value: 23 },
    { month: '05', value: 18 },
    { month: '06', value: 10 },
    { month: '01', value: 11 },
    { month: '02', value: 15 },
    { month: '03', value: 5 },
    { month: '04', value: 23 },
    { month: '05', value: 18 },
    { month: '06', value: 10 },
    { month: '01', value: 11 },
    { month: '02', value: 15 },
    { month: '03', value: 5 },
    { month: '04', value: 23 },
    { month: '05', value: 18 },
    { month: '06', value: 10 },
];

const TransactionChart = () => {
    return (
        <div className="h-[10rem] bg-white p-4 rounded-sm  flex flex-col flex-1">
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={600} height={300} data={data}>
                        {/* <XAxis dataKey="month" /> Specify x-axis data key */}
                        {/* <YAxis /> Add y-axis */}
                        {/* <Tooltip /> Add a tooltip for hovering */}
                        <Bar dataKey="value" fill="rgba(54, 162, 235, 0.2)" /> {/* Blue bar color */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
export default TransactionChart;