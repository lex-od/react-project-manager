import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import css from './Chart.module.scss';

// Синяя линия - фактическая линия спринта, рисуется по такой логике:
// 1) Находим сумму часов потраченных на задачи за конкретную дату.
// 2) Отнимаем это число от остатка предыдущего дня (Если это первый день - отнимает от общей суммы оценочных часов)
// В результате получаем массив с числами [250, 232, 228, ....]

// Красная линия - идеальная линия спринта, рисуется по такой логике:
// Находим сумму всех часов, делим на количество дней спринта и создаем массив с числами такого формата [250, 230, 210, 190]
// Каждое следующее число это предыдущее минус (сумма часов / количество дней спринта)

const Chart = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        chartLine();
    }, []);

    const getPeriod = (days, hours) => {
        const deltaPlan = hours / days;
        return Array(days + 1) //передаем кол-во дней спринта
            .fill('')
            .map((elem, index) => ({ day: index, hours: deltaPlan * index }));
    };
    const period = getPeriod(6, 100).reduce((acc, elem) => {
        if (!acc.day) {
            return { day: [elem.day], hours: [elem.hours] };
        }
        acc.day.push(elem.day);
        acc.hours.unshift(Math.round(elem.hours));

        return acc;
    }, {});
    // console.log(period);
    // console.log([...period.hours]);

    const chartLine = () => {
        setChartData({
            labels: [
                ...period.day,
                //сюда дни
            ],
            datasets: [
                {
                    label: 'Актуальні залишені трудовитрати в годинах',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(255,118,95,0.7)',
                    borderColor: 'rgba(255,118,95,0.7)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(255,118,95,0.7)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(140, 114, 223,1)',
                    pointHoverBorderColor: 'rgba(255,118,95,0.7)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: [165, 159, 180, 181, 156, 155, 140],
                },
                {
                    label: 'Заплановані залишені трудовитрати',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(140, 114, 223,0.7)',
                    borderColor: 'rgba(140, 114, 223,0.7)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(140, 114, 223,0.7)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(255,118,95,1)',
                    pointHoverBorderColor: 'rgba(140, 114, 223,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: [...period.hours],
                },
            ],
        });
    };

    return (
        <>
            <div className={css.chartBox}>
                <p>Burndown Chart (Calendar Team)</p>
                <Line data={chartData} width={600} height={200} />
            </div>
        </>
    );
};
export default Chart;

// ========== EXAMPLE ==============

// const Chart = () => {
//     const data = {
//         labels: [
//             'Січень',
//             'Лютий',
//             'Березень',
//             'Квітень',
//             'Травень',
//             'Червень',
//             'Липень',
//             'Серпень',
//             'Вересень',
//             'Жовтень',
//             'Листопад',
//             'Грудень',
//         ],
//         datasets: [
//             {
//                 label: 'Актуальні залишені трудовитрати в годинах',
//                 fill: false,
//                 lineTension: 0.1,
//                 backgroundColor: 'rgba(75,192,192,0.4)',
//                 borderColor: 'rgba(75,192,192,1)',
//                 borderCapStyle: 'butt',
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 borderJoinStyle: 'miter',
//                 pointBorderColor: 'rgba(75,192,192,1)',
//                 pointBackgroundColor: '#fff',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 5,
//                 pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                 pointHoverBorderColor: 'rgba(220,220,220,1)',
//                 pointHoverBorderWidth: 2,
//                 pointRadius: 1,
//                 pointHitRadius: 10,
//                 data: [65, 59, 80, 81, 56, 55, 40],
//             },
//             {
//                 label: 'Заплановані залишені трудовитрати',
//                 fill: false,
//                 lineTension: 0.1,
//                 backgroundColor: 'rgba(75,192,192,0.4)',
//                 borderColor: 'rgba(75,192,192,1)',
//                 borderCapStyle: 'butt',
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 borderJoinStyle: 'miter',
//                 pointBorderColor: 'rgba(75,192,192,1)',
//                 pointBackgroundColor: '#fff',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 5,
//                 pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                 pointHoverBorderColor: 'rgba(220,220,220,1)',
//                 pointHoverBorderWidth: 2,
//                 pointRadius: 1,
//                 pointHitRadius: 10,
//                 data: [165, 159, 180, 181, 156, 155, 140],
//             },
//         ],
//     };
//     const options = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };
//     return (
//         <>
//             <div className={css.chartBox}>
//                 <p>Burndown Chart (Calendar Team)</p>
//                 <Line data={data} options={options} width={600} height={200} />
//             </div>
//         </>
//     );
// };

// export default Chart;
