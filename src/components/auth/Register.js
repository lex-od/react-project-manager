import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './Auth.module.scss';

const regSchema = Yup.object().shape({
    email: Yup.string()
        .required('* Обов’язкове поле')
        .email('Введіть корректну адресу'),
    password: Yup.string().required('* Обов’язкове поле'),
    confirmPassword: Yup.string()
        .required('* Обов’язкове поле')
        .oneOf([Yup.ref('password'), null], 'Паролi повиннi спiвпадати!'),
});

export default function Register() {
    const dispatch = useDispatch();

    return (
        <main className={css.main}>
            {' '}
            <div className={css.RegisterForm}>
                <h1 className={css.RegisterTitle}>Реєстрація</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={regSchema}
                    onSubmit={values => {
                        const { email, password } = values;

                        dispatch(authOps.register({ email, password }));
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={css.RegForm}>
                            <Field
                                className={css.RegInput}
                                type="email"
                                name="email"
                                placeholder="E-mail"
                            />
                            <ErrorMessage name="email" component="span" />
                            <Field
                                autoComplete="on"
                                className={css.RegInput}
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <ErrorMessage name="password" component="span" />
                            <Field
                                autoComplete="on"
                                className={css.RegInput}
                                type="password"
                                name="confirmPassword"
                                placeholder="Повторіть пароль"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="span"
                            />
                            <button type="submit" disabled={isSubmitting}>
                                Зареєструватися
                            </button>
                            <p>
                                Маєте акаунт?
                                <NavLink to="/login" exact>
                                    Увійти
                                </NavLink>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </main>
    );
}
