import React from 'react'
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts'

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

const TransactionDashBoardBarChart = () => {
    return (
        <div className="h-[30rem] bg-white sm:p-4 rounded-sm  flex flex-col flex-1">
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="rgba(21, 122, 255, 1)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
export default TransactionDashBoardBarChart;