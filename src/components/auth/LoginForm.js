import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../common/Validations/AuthValidInput';
import css from './Auth.module.scss';

export default function Login() {
    const dispatch = useDispatch();
    return (
        <div className={css.container}>
            <div className={css.RegisterForm}>
                {' '}
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={values => {
                        const { email, password } = values;
                        dispatch(authOps.login({ email, password }));
                    }}
                >
                    <div>
                        <Form className={css.registerForm}>
                            <h2 className={css.registerFormTitle}>Вхід</h2>
                            <Field
                                className={css.registerFormInput}
                                autoComplete="on"
                                type="email"
                                name="email"
                                placeholder="E-mail"
                            />
                            <ErrorMessage
                                className={css.errorMessageEmail}
                                name="email"
                                component="span"
                            />
                            <Field
                                className={css.registerFormInput}
                                autoComplete="on"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <ErrorMessage
                                className={css.errorMessagePassword}
                                name="password"
                                component="span"
                            />

                            <button
                                className={css.registerPageButton}
                                type="submit"
                            >
                                Увійти
                            </button>
                            <p className={css.registerFormText}>
                                Маєте аккаунт?{' '}
                                <NavLink to="/register">
                                    Зареєструватись
                                </NavLink>
                            </p>
                        </Form>
                    </div>
                </Formik>
            </div>
        </div>
    );
}
