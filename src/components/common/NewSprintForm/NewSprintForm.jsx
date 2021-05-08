import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { DatePicker } from '../';
import { sprintsOps } from '../../../redux/sprints';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewSprintForm.module.scss';

const newSprintSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Занадто коротка назва!')
        .required("Обов'язково*"),
});

export default function NewSprintForm(onClose) {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                title: '',
            }}
            validationSchema={newSprintSchema}
            onSubmit={sprint => {
                console.log(sprint);
                // dispatch(sprintsOps.addSprint(sprint));

                onClose();
            }}
        >
            {({ errors, touched }) => (
                <Form autoComplete="off" className={css.form}>
                    {/* <label className={css.titleLabel}>
                        <Field
                            name="title"
                            placeholder=" "
                            className={css.titleInp}
                        />
                        <span className={css.titleLabelText}>
                            Назва спринта
                        </span>
                        {errors.title && touched.title ? (
                            <span className={css.errorText}>
                                {errors.title}
                            </span>
                        ) : null}
                    </label> */}

                    <DatePicker />

                    {/* <label className={css.durationLabel}>
                        <Field
                            name="duration"
                            placeholder=" "
                            className={css.durationInp}
                        />
                        <span className={css.durationLabelText}>
                            Тривалість
                        </span>
                        {errors.duration && touched.duration ? (
                            <span className={css.errorText}>
                                {errors.duration}
                            </span>
                        ) : null}
                    </label> */}

                    {/* <AccentButton type="submit">Готово</AccentButton> */}
                </Form>
            )}
        </Formik>
    );
}
