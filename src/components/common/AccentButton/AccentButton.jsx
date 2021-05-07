import classNames from 'classnames';
import css from './AccentButton.module.scss';

export default function AccentButton({ children, className, ...rest }) {
    return (
        <button
            className={classNames(css.button, { [className]: className })}
            {...rest}
        >
            {children}
        </button>
    );
}
