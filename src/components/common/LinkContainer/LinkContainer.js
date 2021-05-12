import css from './LinkContainer.module.scss';

export default function LinkContainer({ children }) {
    return <div className={css.container}>{children}</div>;
}
