import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={css.spinner}>
            <Loader
                type="ThreeDots"
                color="#000BFF"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    );
};

export default Spinner;
