import css from './Sidebar.module.scss';

export default function Sidebar({ children }) {
    return <aside className={css.sidebar}>{children}</aside>;
}
