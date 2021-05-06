import AccentButton from '../AccentButton/AccentButton';
import css from './NewProjectContent.module.scss';

export default function NewProjectContent() {
    return (
        <form>
            <label className={css.nameLabel}>
                <input
                    type="text"
                    placeholder=" "
                    className={css.nameInp}
                ></input>
                <span className={css.nameLabelText}>Название проекта</span>
            </label>
            <label className={css.descrLabel}>
                <span className={css.descrLabelText}>Описание</span>
                <input
                    type="text"
                    placeholder=" "
                    className={css.descrInp}
                ></input>
            </label>
            <AccentButton type="submit">Готово</AccentButton>
        </form>
    );
}
