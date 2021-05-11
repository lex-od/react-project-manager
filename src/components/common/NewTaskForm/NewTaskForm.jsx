import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import * as Yup from 'yup';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewTaskForm.module.scss';
import { tasksOps } from '../../../redux/tasks';

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Занадто коротка назва!')
        .required("Обов'язково*"),

    hoursPlanned: Yup.number()
        .typeError('Введіть число!')
        .integer('Введіть ціле число!')
        .min(1, 'Від 1!')
        .max(8, 'До 8!')
        .required("Обов'язково*"),
});

export default function NewProjectForm({ onClose }) {
    const dispatch = useDispatch();

    const { sprintId } = useParams();

    return (
        <Formik
            initialValues={{
                title: '',
                hoursPlanned: '',
            }}
            validationSchema={validationSchema}
            onSubmit={({ title, hoursPlanned }) => {
                dispatch(
                    tasksOps.taskAddOperation(
                        {
                            title,
                            hoursPlanned: Number(hoursPlanned),
                        },
                        sprintId,
                    ),
                );

                onClose();
            }}
        >
            {({ errors, touched }) => (
                <Form autoComplete="off">
                    <label className={css.titleLabel}>
                        <Field
                            name="title"
                            placeholder=" "
                            className={css.titleInp}
                        />
                        <span className={css.titleLabelText}>Назва задачі</span>
                        {errors.title && touched.title ? (
                            <span className={css.error}>{errors.title}</span>
                        ) : null}
                    </label>

                    <label className={css.hoursLabel}>
                        <Field
                            name="hoursPlanned"
                            placeholder=" "
                            className={css.hoursInp}
                        />
                        <span className={css.hoursLabelText}>
                            Заплановано годин
                        </span>
                        {errors.hoursPlanned && touched.hoursPlanned ? (
                            <span className={css.error}>
                                {errors.hoursPlanned}
                            </span>
                        ) : null}
                    </label>

                    <AccentButton type="submit">Готово</AccentButton>
                </Form>
            )}
        </Formik>
    );
}
