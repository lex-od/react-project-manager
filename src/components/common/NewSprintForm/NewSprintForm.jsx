import classNames from 'classnames';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import { useState } from 'react';
import { useParams } from 'react-router';
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
    duration: Yup.number()
        .typeError('Введіть число')
        .integer('Введіть ціле число')
        .min(1, 'Від 1!')
        .max(21, 'До 21!')
        .required("Обов'язково*"),
});

export default function NewSprintForm({ onClose }) {
    const [date, setDate] = useState(new Date());
    const [isPrevDays, setPrevDays] = useState(false);

    const { projectId } = useParams();
    const dispatch = useDispatch();

    const handlePrevDaysChange = ({ target: { checked } }) => {
        setPrevDays(checked);

        const currDate = new Date();

        if (!checked && date < currDate) {
            setDate(currDate);
        }
    };

    return (
        <Formik
            initialValues={{
                title: '',
                duration: '',
            }}
            validationSchema={newSprintSchema}
            onSubmit={({ title, duration }) => {
                const sprint = {
                    title,
                    duration: Number(duration),
                    endDate: moment(date)
                        .add(Number(duration) - 1, 'd')
                        .format('YYYY-M-D'),
                };

                dispatch(sprintsOps.addSprint(sprint, projectId));

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
                    <label
                        htmlFor="is-prev-days"
                        className={css.isPrevDaysLabel}
                    >
                        Попередні дні
                    </label>

                    <div className={css.bottomWrapper}>
                        <label
                            className={css.dateLabel}
                            onClick={e => e.preventDefault()}
                        >
                            <span className={css.dateLabelText}>
                                Дата початку
                            </span>
                            <DatePicker
                                selected={date}
                                onChange={setDate}
                                minDate={isPrevDays ? null : new Date()}
                            />
                        </label>

                        <label className={css.durationLabel}>
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
                        </label>
                    </div>

                    <div className={css.submitWrapper}>
                        <AccentButton type="submit">Готово</AccentButton>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
