import css from './AuthBackgroundTablet.module.scss';

import elipse1 from '../../../../assets/authImages/EllipseTablet/Ellipse 1.svg';
import elipse2 from '../../../../assets/authImages/EllipseTablet/Ellipse 2.svg';
import elipse4 from '../../../../assets/authImages/EllipseTablet/Ellipse 4.svg';
import elipse5 from '../../../../assets/authImages/EllipseTablet/Ellipse 5.svg';
import union_orange from '../../../../assets/authImages/EllipseTablet/Union.svg';

const BackgroundTablet = () => {
    return (
        <div className={css.elipse_wrapper}>
            <img src={elipse1} alt="white-ball" className={css.elipse1} />
            <img src={elipse2} alt="orange-ball" className={css.elipse2} />
            <img src={elipse4} alt="white-ball" className={css.elipse4} />
            <img src={elipse5} alt="orange-ball" className={css.elipse5} />
            <img src={union_orange} alt="" className={css.union_orange} />
        </div>
    );
};

export default BackgroundTablet;
