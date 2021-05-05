import css from './ViewWrapper.module.scss';

export default function ViewWrapper({ children }) {
    return <div className={css.wrapper}>{children}</div>;
}
