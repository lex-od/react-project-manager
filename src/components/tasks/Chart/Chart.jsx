import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import css from './Chart.module.scss';
import axios from 'axios';

import { useSelector } from 'react-redux';

import { tasksSls } from '../../../redux/tasks';
import { sprintsSls } from '../../../redux/sprints';

const Chart = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        chartLine();
    }, []);

    const tasksList = useSelector(tasksSls.getAllTasks);
    const sprintsList = useSelector(sprintsSls.getAllSprints);

    // ============= BLUE LINE
    // Синяя линия - фактическая линия спринта, рисуется по такой логике:
    // 1) Находим сумму часов потраченных на задачи за конкретную дату. (hoursWastedPerDayArray)
    // 2) Отнимаем это число от остатка предыдущего дня (Если это первый день - отнимает от общей суммы оценочных часов)
    // В результате получаем массив с числами [250, 232, 228, ....]

    // const tasks = [
    //     {
    //         planed: 7,
    //         wasted: 9,
    //         wastedPerDay: [
    //             { date: 'dfgh', singleWasted: 4 },
    //             { date: 'efd', singleWasted: 2 },
    //             { date: 'dfasdsagh', singleWasted: 3 },
    //         ],
    //     },
    //     {
    //         planed: 6,
    //         wasted: 5,
    //         wastedPerDay: [
    //             { date: 'dsfsdfgh', singleWasted: 3 },
    //             { date: 'efsdfd', singleWasted: 1 },
    //             { date: 'dfassdfsdsagh', singleWasted: 1 },
    //         ],
    //     },
    //     {
    //         planed: 7,
    //         wasted: 9,
    //         wastedPerDay: [
    //             { date: 'dfgh', singleWasted: 4 },
    //             { date: 'efd', singleWasted: 2 },
    //             { date: 'dfasdsagh', singleWasted: 3 },
    //         ],
    //     },
    // ];

    // ============================
    // ==== число, все часы на спринт
    const planedHours = tasksList.reduce(
        (acc, task) => (acc += task.hoursPlanned),
        0,
    );
    console.log('planedHours :>> ', planedHours);
    // ==== число, шаг для планового графика
    const duration = sprintsList[1].duration; // кол-во дней спринта
    const deltaHours = (planedHours / duration) // tasksList[0].hoursWastedPerDay.length
        .toFixed(2);
    console.log('deltaHours :>> ', deltaHours);
    // ==== массив массивов, потрачено часов на задачу в день
    const wastedByTask = tasksList.map(task =>
        task.hoursWastedPerDay.reduce((acc, task) => {
            acc.push(task.singleHoursWasted);
            return acc;
        }, []),
    );
    console.log('wastedByTask :>> ', wastedByTask);
    // 0: (7) [5, 0, 0, 0, 0, 0, 0]
    // 1: (7) [2, 0, 0, 0, 0, 0, 0]
    // 2: (7) [3, 0, 0, 0, 0, 0, 0]
    // 3: (7) [5, 0, 0, 0, 0, 0, 0]
    // length: 4
    // ==== график фактический (длина массива не равна длинне исходного )
    let myPlanedTasksHours = planedHours;
    const arr = wastedByTask.reduce((acc, task, ind) => {
        const result = wastedByTask.reduce((acc, task) => {
            acc += task[ind];
            return acc;
        }, 0);
        acc.push(
            myPlanedTasksHours - result < 0 ? 0 : myPlanedTasksHours - result,
        );
        myPlanedTasksHours = myPlanedTasksHours - result;
        return acc;
    }, []);
    console.log('result :>> ', arr);
    // 0: 2
    // 1: 2
    // 2: 2
    // 3: 2
    // length: 4
    // ==== график план
    const getStreightLine = () => {
        const arr = [planedHours];
        let prev = planedHours;
        for (let i = 0; i < duration; i += 1) {
            arr.push(prev - deltaHours);
            prev = prev - deltaHours;
        }
        return arr;
    };
    console.log('get :>> ', getStreightLine());
    // 0: 17
    // 1: 14.57
    // 2: 12.14
    // 3: 9.71
    // 4: 7.280000000000001
    // 5: 4.850000000000001
    // 6: 2.4200000000000013
    // 7: -0.009999999999998899
    // length: 8

    // ==== массив, суммы затраченных часов по дням

    // const arr2 = wastedByTask.reduce((acc, task, ind) => {
    //     const result = wastedByTask.reduce((acc, task) => {
    //         acc += task[ind];
    //         return acc;
    //     }, 0);
    //     acc.push(result);
    //     return acc;
    // }, []);
    // console.log('result :>> ', arr2);

    // ============= RED LINE

    // Красная линия - идеальная линия спринта, рисуется по такой логике:
    // Находим сумму всех часов, делим на количество дней спринта и создаем массив с числами такого формата [250, 230, 210, 190]
    // Каждое следующее число это предыдущее минус (сумма часов / количество дней спринта)

    // ==== массив, дата таска
    const getDatesArray = () => {
        return tasksList.map(task => {
            return task.hoursWastedPerDay.reduce((acc, task) => {
                acc.push(task.currentDay);
                return acc;
            }, []);
        });
    };

    //=========================

    const chartLine = () => {
        setChartData({
            labels: [
                'заплановано',
                ...getDatesArray()[0],
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
                    data: [planedHours, ...arr],
                    // data: [35, 30, 20, 14, 5],
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
                    data: [...getStreightLine()],
                    // data: [...period.hours],
                },
            ],
        });
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
                <p className={css.title}>Burndown Chart (Calendar Team)</p>
                <Line
                    data={chartData}
                    options={options}
                    width={600}
                    height={250}
                />
            </div>
        </>
    );
};
export default Chart;

// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================

// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import css from './Chart.module.scss';

// import { useSelector } from 'react-redux';
// import { tasksSls } from '../../../redux/tasks';

// const Chart = () => {
//     const [chartData, setChartData] = useState({});

//     useEffect(() => {
//         chartLine();
//     }, []);

//     const tasksList = useSelector(tasksSls.getAllTasks);
//     console.log('tasksList :>> ', tasksList);
//     const plannedHours = tasksList.reduce(
//         (acc, task) => acc + task.hoursPlanned,
//         0,
//     );

//     // const hoursWastedPerDayArray = tasks.map(task => {
//     //     const dayHours = task.hoursWastedPerDay;
//     //     return dayHours.reduce(
//     //         (acc, dayHour) => acc + dayHour.singleHoursWasted,
//     //         0,
//     //     );
//     // });
//     // console.log(hoursWastedPerDayArray);

//     // const wastedHours = hoursWastedPerDayArray.map(perDay => {
//     //     let result = plannedHours;
//     //     result = plannedHours - perDay;
//     //     return result;
//     // });

//     // console.log(plannedHours);
//     // console.log(wastedHours);
//     // ============= BLUE LINE
//     // Синяя линия - фактическая линия спринта, рисуется по такой логике:
//     // 1) Находим сумму часов потраченных на задачи за конкретную дату. (hoursWastedPerDayArray)
//     // 2) Отнимаем это число от остатка предыдущего дня (Если это первый день - отнимает от общей суммы оценочных часов)
//     // В результате получаем массив с числами [250, 232, 228, ....]

//     // const getPeriodWasted = (hoursPlanned, hoursWasted) => {
//     //     const deltaWasted = hoursPlanned - hoursWasted;
//     //     return Array(days + 1) //передаем кол-во дней спринта
//     //         .fill('')
//     //         .map((elem, index) => ({
//     //             day: index,
//     //             hoursWasted: deltaWasted * index,
//     //         }));
//     // };

//     // const period = getPeriodWasted(6, 100).reduce((acc, elem) => {
//     //     if (!acc.day) {
//     //         return { day: [elem.day], hoursWasted: [elem.hoursWasted] };
//     //     }
//     //     acc.day.push(elem.day);
//     //     acc.hoursWasted.unshift(Math.round(elem.hoursWasted));

//     //     return acc;
//     // }, {});
//     // ============= RED LINE

//     // Красная линия - идеальная линия спринта, рисуется по такой логике:
//     // Находим сумму всех часов, делим на количество дней спринта и создаем массив с числами такого формата [250, 230, 210, 190]
//     // Каждое следующее число это предыдущее минус (сумма часов / количество дней спринта)
//     // task.hoursPlanned;

//     const getPeriodPlanned = (days, hours) => {
//         const deltaPlanned = hours / days;
//         return Array(days + 1) //передаем кол-во дней спринта
//             .fill('')
//             .map((elem, index) => ({
//                 day: index,
//                 hours: deltaPlanned * index,
//             }));
//     };

//     const period = getPeriodPlanned(6, plannedHours).reduce((acc, elem) => {
//         if (!acc.day) {
//             return { day: [elem.day], hours: [elem.hours] };
//         }
//         acc.day.push(elem.day);
//         acc.hours.unshift(elem.hours.toFixed(1));

//         return acc;
//     }, {});

//     // console.log(period);
//     // console.log([...period.hours]);

//     const chartLine = () => {
//         setChartData({
//             labels: [
//                 ...period.day,
//                 //сюда дни
//             ],
//             datasets: [
//                 {
//                     label: 'Актуальні залишені трудовитрати в годинах',
//                     fill: false,
//                     lineTension: 0.1,
//                     backgroundColor: 'rgba(255,118,95,0.7)',
//                     borderColor: 'rgba(255,118,95,0.7)',
//                     borderCapStyle: 'butt',
//                     borderDash: [],
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: 'miter',
//                     pointBorderColor: 'rgba(255,118,95,0.7)',
//                     pointBackgroundColor: '#fff',
//                     pointBorderWidth: 1,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: 'rgba(140, 114, 223,1)',
//                     pointHoverBorderColor: 'rgba(255,118,95,0.7)',
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 3,
//                     pointHitRadius: 10,
//                     data: [65, 25, 80, 81, 56, 55, 40],
//                 },
//                 {
//                     label: 'Заплановані залишені трудовитрати',
//                     fill: false,
//                     lineTension: 0.1,
//                     backgroundColor: 'rgba(140, 114, 223,0.7)',
//                     borderColor: 'rgba(140, 114, 223,0.7)',
//                     borderCapStyle: 'butt',
//                     borderDash: [],
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: 'miter',
//                     pointBorderColor: 'rgba(140, 114, 223,0.7)',
//                     pointBackgroundColor: '#fff',
//                     pointBorderWidth: 1,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: 'rgba(255,118,95,1)',
//                     pointHoverBorderColor: 'rgba(140, 114, 223,1)',
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 3,
//                     pointHitRadius: 10,
//                     data: [...period.hours],
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

//     return (
//         <>
//             <div className={css.chartBox}>
//                 <p className={css.title}>Burndown Chart (Calendar Team)</p>
//                 <Line
//                     data={chartData}
//                     options={options}
//                     width={600}
//                     height={250}
//                 />
//             </div>
//         </>
//     );
// };
// export default Chart;
