import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import * as Yup from 'yup';
import { projectsActs } from '../../../redux/projects';
import { sprintsOps } from '../../../redux/sprints';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewMemberForm.module.scss';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введіть коректний e-mail!')
        .required("Обов'язково*"),
});

export default function NewMemberForm() {
    const { projectId } = useParams();

    const dispatch = useDispatch();
    // 📌 Заменить на селектор !!!
    const projects = useSelector(state => state.projects.items);

    useEffect(() => {
        axios
            .get('/project')
            .then(({ data }) =>
                dispatch(projectsActs.getProjectsSuccess(data)),
            );
    }, []);

    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={member => {
                dispatch(sprintsOps.addMember(member, projectId));
            }}
        >
            {({ errors, touched }) => (
                <Form autoComplete="off">
                    <label className={css.emailLabel}>
                        <Field
                            name="email"
                            placeholder=" "
                            className={css.emailInp}
                        />
                        <span className={css.emailLabelText}>
                            Введіть e-mail
                        </span>
                        {errors.email && touched.email ? (
                            <span className={css.error}>{errors.email}</span>
                        ) : null}
                    </label>

                    <AccentButton type="submit">Готово</AccentButton>
                </Form>
            )}
        </Formik>
    );
}
