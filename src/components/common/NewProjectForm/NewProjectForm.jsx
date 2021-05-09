import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { projectsOps } from '../../../redux/projects';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewProjectForm.module.scss';

const newProjectSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Занадто коротка назва!')
        // .max(50, 'Too Long!')
        .required("Обов'язково*"),

    description: Yup.string()
        .min(3, 'Занадто короткий опис!')
        // .max(50, 'Too Long!')
        .required("Обов'язково*"),
});

export default function NewProjectForm(onClose) {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
            }}
            validationSchema={newProjectSchema}
            onSubmit={project => {
                dispatch(projectsOps.addProject(project));

                onClose();
            }}
        >
            {({ errors, touched }) => (
                <Form autoComplete="off">
                    <label className={css.nameLabel}>
                        <Field
                            name="title"
                            placeholder=" "
                            className={css.nameInp}
                        />
                        <span className={css.nameLabelText}>
                            Название проекта
                        </span>
                        {errors.title && touched.title ? (
                            <span className={css.errorText}>
                                {errors.title}
                            </span>
                        ) : null}
                    </label>

                    <label className={css.descrLabel}>
                        <Field
                            name="description"
                            placeholder=" "
                            className={css.descrInp}
                        />
                        <span className={css.descrLabelText}>Описание</span>
                        {errors.description && touched.description ? (
                            <span className={css.errorText}>
                                {errors.description}
                            </span>
                        ) : null}
                    </label>

                    <AccentButton type="submit">Готово</AccentButton>
                </Form>
            )}
        </Formik>
    );
}
