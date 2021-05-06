<<<<<<< Updated upstream
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
=======
import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
    <div>
        <h1>Вхід</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email,
                    )
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Увійти
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default Basic;
>>>>>>> Stashed changes
