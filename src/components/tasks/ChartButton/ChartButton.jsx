import classNames from 'classnames';
import React from 'react';
import css from './ChartButton.module.scss';
import sprite from '../../../assets/icons/sprite-chart.svg';

const ChartButton = ({ className, ...rest }) => {
    return (
        <button
            type="button"
            className={classNames(css.chartButton, className)}
            {...rest}
        >
            <svg className={css.chartButtonSvg}>
                <use href={sprite + '#icon-analytics'}></use>
            </svg>
        </button>
    );
};

export default ChartButton;

// ====== INSTRUCTION ==================

// 1:
// import { useState } from 'react';
// import { ChartModal, ChartButton } from '../tasks';
// import { tasksSls } from '../redux/tasks';
// import { useSelector } from 'react-redux';

// 2:
// const tasksList = useSelector(tasksSls.getAllTasks);
// const [openModal, setOpenModal] = useState(false);
//     const onOpenModal = () => {
//         setOpenModal(state => !state);
//     };

// 3:
// {tasksList.length > 2 && (
//     <div>
//         {openModal && <ChartModal onClose={onOpenModal} />}
//         <ChartButton onClick={onOpenModal}></ChartButton>
//     </div>
// )}
