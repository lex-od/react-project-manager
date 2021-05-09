import styles from './SprintsSideContent.module.scss';
import spriteGoBack from '../../../assets/icons/goBackArrow.svg';

export default function SprintsContent() {
    return (
        <div className={styles.asideWrap}>
            <div className={styles.asideBack}>
                <svg className={styles.backSvg}>
                    <use href={spriteGoBack + '#icon-goBack'}></use>
                </svg>
                <span className={styles.asideBackText}>Показати проекти</span>
            </div>
            <ul className={styles.asideSprintsList}>
                <li className={styles.asideSprintsItem}>
                    <div className={styles.asideSprintsIcon}></div>
                    <span className={styles.asideSprintsName}>Project 1</span>
                </li>
            </ul>
        </div>
    );
}
