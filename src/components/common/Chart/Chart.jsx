import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import css from './Chart.module.scss';

// const Chart = () => {
//     const [chartData, setChartData] = useState({});

//     const chartLine = () => {
//         setChartData({
//             labels: [
//                 'Січень',
//                 'Лютий',
//                 'Березень',
//                 'Квітень',
//                 'Травень',
//                 'Червень',
//                 'Липень',
//                 'Серпень',
//                 'Вересень',
//                 'Жовтень',
//                 'Листопад',
//                 'Грудень',
//             ],
//             dataset: [
//                 {
//                     label: 'Актуальні залишені трудовитрати в годинах',
//                     fill: false,
//                     lineTension: 0.1,
//                     backgroundColor: 'rgba(75,192,192,0.4)',
//                     borderColor: 'rgba(75,192,192,1)',
//                     borderCapStyle: 'butt',
//                     borderDash: [],
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: 'miter',
//                     pointBorderColor: 'rgba(75,192,192,1)',
//                     pointBackgroundColor: '#fff',
//                     pointBorderWidth: 1,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                     pointHoverBorderColor: 'rgba(220,220,220,1)',
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 1,
//                     pointHitRadius: 10,
//                     data: [65, 59, 80, 81, 56, 55, 40],
//                 },
//                 {
//                     label: 'Заплановані залишені трудовитрати',
//                     fill: false,
//                     lineTension: 0.1,
//                     backgroundColor: 'rgba(75,192,192,0.4)',
//                     borderColor: 'rgba(75,192,192,1)',
//                     borderCapStyle: 'butt',
//                     borderDash: [],
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: 'miter',
//                     pointBorderColor: 'rgba(75,192,192,1)',
//                     pointBackgroundColor: '#fff',
//                     pointBorderWidth: 1,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                     pointHoverBorderColor: 'rgba(220,220,220,1)',
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 1,
//                     pointHitRadius: 10,
//                     data: [165, 159, 180, 181, 156, 155, 140],
//                 },
//             ],
//         });
//     };
//     const options = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };

//     useEffect(() => {
//         chartLine();
//     }, []);

//     return (
//         <>
//             <div className={css.chartBox}>
//                 <p>Burndown Chart (Calendar Team)</p>
//                 <Line
//                     data={chartData}
//                     options={options}
//                     width={600}
//                     height={200}
//                 />
//             </div>
//         </>
//     );
// };
// export default Chart;
// ================================================

const Chart = () => {
    const data = {
        labels: [
            'Січень',
            'Лютий',
            'Березень',
            'Квітень',
            'Травень',
            'Червень',
            'Липень',
            'Серпень',
            'Вересень',
            'Жовтень',
            'Листопад',
            'Грудень',
        ],
        dataset: [
            {
                label: 'Актуальні залишені трудовитрати в годинах',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
            {
                label: 'Заплановані залишені трудовитрати',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [165, 159, 180, 181, 156, 155, 140],
            },
        ],
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <>
            <div className={css.chartBox}>
                <p>Burndown Chart (Calendar Team)</p>
                <Line data={data} options={options} width={600} height={200} />
            </div>
        </>
    );
};

export default Chart;
