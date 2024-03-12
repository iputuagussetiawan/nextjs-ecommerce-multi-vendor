"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsCharts() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.7)',
                    'rgba(18, 136, 215, 0.571)',
                    'rgba(255, 207, 86, 0.515)',
                    'rgba(75, 192, 192, 0.478)',
                    'rgba(153, 102, 255, 0.461)',
                    'rgba(255, 160, 64, 0.503)',
                ],
                borderColor: [
                    'rgba(0, 0, 255, 0.3)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className='bg-slate-100 dark:bg-slate-700 p-8 rounded-lg shadow-xl'>
            <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Best Selling Products Charts</h2>
            {/* Charts */}
            <Pie data={data} />
        </div>
    )
}
