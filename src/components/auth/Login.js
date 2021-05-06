import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Auth.module.scss';

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required('* Обов’язкове поле')
        .email('Введіть корректну адресу'),
    password: Yup.string().required('* Обов’язкове поле'),
});
export default function Login() {
    const dispatch = useDispatch();
    return (
        <main>
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
                        <Form className={css.RegForm}>
                            <h2>Вхід</h2>
                            <Field
                                className={css.RegInput}
                                autoComplete="on"
                                type="email"
                                name="email"
                                placeholder="E-mail"
                            />
                            <ErrorMessage name="email" component="span" />
                            <Field
                                className={css.RegInput}
                                autoComplete="on"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <ErrorMessage name="password" component="span" />

                            <button type="submit">Увійти</button>
                            <p>
                                Маєте аккаунт?{' '}
                                <NavLink to="/register">
                                    Зареєструватись
                                </NavLink>
                            </p>
                        </Form>
                    </div>
                </Formik>
            </div>
        </main>
    );
}
