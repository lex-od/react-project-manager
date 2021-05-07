import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewProjectForm.module.scss';

const newProjectSchema = Yup.object().shape({
    title: Yup.string()
        // .min(2, 'Too Short!')
        // .max(50, 'Too Long!')
        .required('Обязательное поле'),

    description: Yup.string()
        // .min(2, 'Too Short!')
        // .max(50, 'Too Long!')
        .required('Обязательное поле'),
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
                <Form>
                    <label className={css.nameLabel}>
                        <Field
                            name="title"
                            placeholder=" "
                            className={css.nameInp}
                        />
                        <span className={css.nameLabelText}>
                            Название проекта
                        </span>
                    </label>
                    {errors.title && touched.title ? (
                        <div className={css.nameError}>{errors.title}</div>
                    ) : null}

                    <label className={css.descrLabel}>
                        <span className={css.descrLabelText}>Описание</span>
                        <Field
                            name="description"
                            placeholder=" "
                            className={css.descrInp}
                        />
                    </label>
                    {errors.description && touched.description ? (
                        <div className={css.descrError}>
                            {errors.description}
                        </div>
                    ) : null}

                    <AccentButton type="submit">Готово</AccentButton>
                </Form>
            )}
        </Formik>
    );
}
