import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewProjectForm.module.scss';

const newProjectSchema = Yup.object().shape({
    title: Yup.string()
        // .min(2, 'Too Short!')
        // .max(50, 'Too Long!')
        .required('Обязательно*'),

    description: Yup.string()
        // .min(2, 'Too Short!')
        // .max(50, 'Too Long!')
        .required('Обязательно*'),
});

export default function NewProjectForm(onClose) {
    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
            }}
            validationSchema={newProjectSchema}
            onSubmit={values => {
                // Добавить диспатч операции

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
