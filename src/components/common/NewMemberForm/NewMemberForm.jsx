// import axios from 'axios';
import { Formik, Form, Field } from 'formik';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import * as Yup from 'yup';
import { authSls } from '../../../redux/auth';
import { projectsOps, projectsSls } from '../../../redux/projects';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewMemberForm.module.scss';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введіть коректний e-mail!')
        .required("Обов'язково*"),
});

export default function NewMemberForm() {
    const projects = useSelector(projectsSls.getAllProjects);
    const userEmail = useSelector(authSls.getUserEmail);

    const { projectId } = useParams();

    const dispatch = useDispatch();

    // 📌 Удалить !!!
    // useEffect(() => {
    //     axios
    //         .get('/project')
    //         .then(({ data }) =>
    //             dispatch(projectsActs.getProjectsSuccess(data)),
    //         );
    // }, []);

    const members =
        projects
            .find(({ _id }) => _id === projectId)
            ?.members?.filter?.(email => email !== userEmail) || [];

    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(member, { resetForm }) => {
                dispatch(projectsOps.addMember(member, projectId));

                resetForm();
            }}
        >
            {({ errors, touched }) => (
                <Form autoComplete="off" className={css.form}>
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

                    <p className={css.membersTitle}>Додані користувачі:</p>
                    {members.length ? (
                        <ul className={css.membersList}>
                            {members.map(email => (
                                <li key={email} className={css.membersItem}>
                                    {email}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={css.membersEmpty}>
                            Ви ще не додали жодного користувача
                        </p>
                    )}

                    <div className={css.submitWrapper}>
                        <AccentButton type="submit">Готово</AccentButton>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
