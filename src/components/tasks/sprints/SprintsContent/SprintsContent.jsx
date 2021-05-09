import styles from './SprintsContent.module.scss';
import spriteSearch from '../../../assets/icons/searchIcon.svg';
import spriteText from '../../../assets/icons/sprintsText.svg';
import spriteDelete from '../../../assets/icons/sprintsDelete.svg';
import spriteLeft from '../../../assets/icons/sprintsArrowLeft.svg';
import spriteRight from '../../../assets/icons/sprintsArrowRight.svg';

export default function SprintsContent() {
    return (
        <div className={styles.wrap}>
            <div className={styles.section}>
                <div className={styles.toggleWrap}>
                    <svg className={styles.leftSvg}>
                        <use href={spriteLeft + '#icon-left'}></use>
                    </svg>
                    <svg className={styles.rightSvg}>
                        <use href={spriteRight + '#icon-right'}></use>
                    </svg>
                    <span className={styles.date}>08.08.2020</span>
                </div>

                <form className={styles.form}>
                    <input className={styles.input} type="text"></input>
                    <svg className={styles.inputSvg}>
                        <use href={spriteSearch + '#icon-search'}></use>
                    </svg>
                </form>
            </div>
            <div>
                <div className={styles.sprintHead}>
                    <h1 className={styles.title}>Sprint Burndown Chart 1</h1>
                    <svg className={styles.textSvg}>
                        <use href={spriteText + '#icon-text'}></use>
                    </svg>
                </div>
                <ul className={styles.sprintsList}>
                    <li className={styles.sprintCard}>
                        <h2 className={styles.sprintCardHead}>
                            KN-1 Configure project
                        </h2>
                        <div className={styles.sprintItem}>
                            <span className={styles.sprintItemText}>
                                Заплановано годин
                            </span>
                            <span className={styles.sprintItemText}>8</span>
                        </div>
                        <div className={styles.sprintItem}>
                            <span className={styles.sprintItemText}>
                                Витрачено год / день
                            </span>
                            <span className={styles.sprintItemText}>6</span>
                        </div>
                        <div className={styles.sprintItem}>
                            <span className={styles.sprintItemText}>
                                Витрачено годин
                            </span>
                            <span className={styles.sprintItemText}>0</span>
                        </div>
                        <svg className={styles.deleteSvg}>
                            <use href={spriteDelete + '#icon-delete'}></use>
                        </svg>
                    </li>
                    <li className={styles.sprintCard}>
                        <h2 className={styles.sprintCardHead}>
                            KN-1 Configure project
                        </h2>
                        <div className={styles.sprintItem}>
                            <span className={styles.sprintItemText}>
                                Заплановано годин
                            </span>
                            <span className={styles.sprintItemText}>8</span>
                        </div>
                        <div className={styles.sprintItem}>
                            <span className={styles.sprintItemText}>
                                Витрачено год / день
                            </span>
                            <span className={styles.sprintItemText}>6</span>
                        </div>
                        <div className={styles.sprintItem}>
                            <span className={styles.sprintItemText}>
                                Витрачено годин
                            </span>
                            <span className={styles.sprintItemText}>0</span>
                        </div>
                        <svg className={styles.deleteSvg}>
                            <use href={spriteDelete + '#icon-delete'}></use>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    );
}
