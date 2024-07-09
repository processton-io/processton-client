import Chart from 'react-apexcharts'
import React , { useState } from 'react';

export default function BasicLineChart({title, value,  ...props}) {
    
    const [series, setSeries] = useState([{ name: title, data: value.data }]);

    const options = {
        chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
        },
        dataLabels: {
        enabled: false
        },
        stroke: {
        curve: 'straight'
        },
        title: {
            text: title,
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: value.cols,
        }
    };
    return (
            <div className="bg-gray-50 p-4">
                <Chart options={options} series={series} type="line" height={350} />
            </div>
    );
}
