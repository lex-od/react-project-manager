import React from 'react';
import styles from './AuthBackground.module.scss';

import elipse1 from '../authImages/Ellipse 1.svg';
import elipse2 from '../authImages/Ellipse 2.svg';
import elipse3 from '../authImages/Ellipse 3.svg';
import elipse4 from '../authImages/Ellipse 4.svg';
import elipse5 from '../authImages/Ellipse 5.svg';
import elipse6 from '../authImages/Ellipse 6.svg';
import union_white from '../authImages/UnionW.svg';
import union_orange from '../authImages/UnionO.svg';

const AuthBackground = () => {
    return (
        <div className={styles.elipse_wrapper}>
            <img src={elipse1} alt="white-ball" className={styles.elipse1} />
            <img src={elipse2} alt="orange-ball" className={styles.elipse2} />
            <img src={elipse3} alt="whire-ball" className={styles.elipse3} />
            <img src={elipse4} alt="white-ball" className={styles.elipse4} />
            <img src={elipse5} alt="orange-ball" className={styles.elipse5} />
            <img src={elipse6} alt="orange-ball" className={styles.elipse6} />
            <img src={union_white} alt="" className={styles.union_white} />
            <img src={union_orange} alt="" className={styles.union_orange} />
        </div>
    );
};

export default AuthBackground;
