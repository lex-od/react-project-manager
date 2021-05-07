import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Spinner.module.scss';

export default function Spinner() {
    return (
        <div className={css.spinner}>
            <Loader
                type="ThreeDots"
                color="#ff765f"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    );
}
