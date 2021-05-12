import css from './AuthBackgroundDesktop.module.scss';

import elipse1 from '../../../../assets/authImages/EllipseDesktop/Ellipse11.svg';
import elipse2 from '../../../../assets/authImages/EllipseDesktop/Ellipse 22.svg';
import elipse3 from '../../../../assets/authImages/EllipseDesktop/Ellipse 3.svg';
import elipse4 from '../../../../assets/authImages/EllipseDesktop/Ellipse 44.svg';
import elipse5 from '../../../../assets/authImages/EllipseDesktop/Ellipse 5.svg';
import elipse6 from '../../../../assets/authImages/EllipseDesktop/Ellipse 6.svg';
import union_white from '../../../../assets/authImages/EllipseDesktop/UnionWhite.svg';
import union_orange from '../../../../assets/authImages/EllipseDesktop/UnionOrang.svg';

const BackgroundDesktop = () => {
    return (
        <div className={css.wraperElipse}>
            <img src={elipse1} alt="white-ball" className={css.elipse1} />
            <img src={elipse2} alt="orange-ball" className={css.elipse2} />
            <img src={elipse3} alt="whire-ball" className={css.elipse3} />
            <img src={elipse4} alt="white-ball" className={css.elipse4} />
            <img src={elipse5} alt="orange-ball" className={css.elipse5} />
            <img src={elipse6} alt="orange-ball" className={css.elipse6} />
            <img src={union_white} alt="" className={css.union_white} />
            <img src={union_orange} alt="" className={css.union_orange} />
        </div>
    );
};

export default BackgroundDesktop;
