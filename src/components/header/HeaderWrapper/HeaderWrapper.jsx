import css from './HeaderWrapper.module.scss';

export default function HeaderWrapper({ children }) {
    return (
        <div className={css.wrapper}>
            <div className={css.wrapperFixed}>{children}</div>
        </div>
    );
}
