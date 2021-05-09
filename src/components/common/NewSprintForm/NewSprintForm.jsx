import classNames from 'classnames';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { DatePicker } from '../';
// import { sprintsOps } from '../../../redux/sprints';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewSprintForm.module.scss';

const newSprintSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Занадто коротка назва!')
        .required("Обов'язково*"),
    duration: Yup.number()
        .typeError('Введіть число')
        .integer('Введіть ціле число')
        .min(1, 'Від 1!')
        .max(8, 'До 8!')
        .required("Обов'язково*"),
});

export default function NewSprintForm(onClose) {
    const [date, setDate] = useState(Date.now());
    const [isPrevDays, setPrevDays] = useState(false);

    // const dispatch = useDispatch();

    const handlePrevDaysChange = ({ target: { checked } }) => {
        setPrevDays(checked);

        if (!checked && date < Date.now()) {
            setDate(Date.now());
        }
    };

    return (
        <Formik
            initialValues={{
                title: '',
                duration: '',
            }}
            validationSchema={newSprintSchema}
            onSubmit={values => {
                console.log(date);
                console.log(values);
                // dispatch(sprintsOps.addSprint(sprint));

                onClose();
            }}
        >
            {({ errors, touched }) => (
                <Form
                    autoComplete="off"
                    className={css.form}
                    spellCheck="false"
                >
                    <label className={css.titleLabel}>
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
                    </label>

                    <input
                        id="is-prev-days"
                        type="checkbox"
                        checked={isPrevDays}
                        onChange={handlePrevDaysChange}
                        className={classNames(
                            'visually-hidden',
                            css.isPrevDaysCb,
                        )}
                    />
                    <label for="is-prev-days" className={css.isPrevDaysLabel}>
                        Попередні дні
                    </label>

                    <label className={css.dateLabel}>
                        <span className={css.dateLabelText}>Дата початку</span>
                        <DatePicker
                            selected={date}
                            onChange={setDate}
                            minDate={isPrevDays ? null : Date.now()}
                        />
                    </label>

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
