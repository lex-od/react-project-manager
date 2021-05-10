import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import * as Yup from 'yup';
import { sprintsOps } from '../../../redux/sprints';
import AccentButton from '../AccentButton/AccentButton';
import css from './NewMemberForm.module.scss';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введіть коректний e-mail!')
        .required("Обов'язково*"),
});

export default function NewProjectForm(onClose) {
    const dispatch = useDispatch();
    const { projectId } = useParams();

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
