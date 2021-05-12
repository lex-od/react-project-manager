import css from './ChartButton.module.scss';
import sprite from '../../../assets/icons/sprite-chart.svg';

export default function ChartButton({ children, ...rest }) {
    return (
        <button type="button" className={css.chartButton} {...rest}>
            <svg className={css.chartButtonSvg}>
                <use href={sprite + '#icon-analytics'}></use>
            </svg>
            {children}
        </button>
    );
}
// ====== INSTRUCTION ==================
// 1:
// import { ChartButton } from '../common';
// import { ChartModal } from '../tasks';

// 2:
// const [openModal, setOpenModal] = useState(false);
//     const onOpenModal = () => {
//         setOpenModal(state => !state);
//     };

// 3:
// {openModal && <ChartModal onClose={onOpenModal} />}
// <ChartButton onClick={onOpenModal}></ChartButton>
