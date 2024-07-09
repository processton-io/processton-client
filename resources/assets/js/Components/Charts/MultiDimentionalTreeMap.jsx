import Chart from 'react-apexcharts'
import React , { useState } from 'react';

export default function MultiDimentionalTreeMap({title, value,  ...props}) {
    
    const [series, setSeries] = useState(value);

    const options = {
        legend: {
            show: true
        },
        chart: {
            height: 350,
            type: 'treemap'
        },
        title: {
            text: 'Multi-dimensional Treemap',
            align: 'center'
        }
    };
    return (
            <div className="bg-gray-50 p-4">
                <Chart options={options} series={series} type="treemap" height={350} />
            </div>
    );
}
