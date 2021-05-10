import css from './AuthBackgroundDesktop.module.scss';

import elipse1 from '../../../../assets/authImages/EllipseDesktop/Ellipse 1.svg';
import elipse2 from '../../../../assets/authImages/EllipseDesktop/Ellipse 2.svg';
import elipse3 from '../../../../assets/authImages/EllipseDesktop/Ellipse 3.svg';
import elipse4 from '../../../../assets/authImages/EllipseDesktop/Ellipse 4.svg';
import elipse5 from '../../../../assets/authImages/EllipseDesktop/Ellipse 5.svg';
import elipse6 from '../../../../assets/authImages/EllipseDesktop/Ellipse 6.svg';
import union_white from '../../../../assets/authImages/EllipseDesktop/UnionW.svg';
import union_orange from '../../../../assets/authImages/EllipseDesktop/UnionO.svg';

const BackgroundDesktop = () => {
    return (
        <>
            <img src={elipse1} alt="white-ball" className={css.elipse1} />
            <img src={elipse2} alt="orange-ball" className={css.elipse2} />
            <img src={elipse3} alt="whire-ball" className={css.elipse3} />
            <img src={elipse4} alt="white-ball" className={css.elipse4} />
            <img src={elipse5} alt="orange-ball" className={css.elipse5} />
            <img src={elipse6} alt="orange-ball" className={css.elipse6} />
            <img src={union_white} alt="" className={css.union_white} />
            <img src={union_orange} alt="" className={css.union_orange} />
        </>
    );
};

export default BackgroundDesktop;
