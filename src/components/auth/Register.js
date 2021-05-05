import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Register = () => (
    <div>
        <h1>Реєстрація</h1>
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
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
            {({ isSubmitting }) => (
                <Form>
                    <Field type="name" name="name" />
                    <ErrorMessage name="name" component="div" />
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Зареєструватися
                    </button>
                    <p>
                        Маєте акаунт?
                        <NavLink
                            to="/"
                            exact
                            // className={css.link}
                            // activeClassName={css.activeLink}
                        >
                            Увійти
                        </NavLink>
                    </p>
                </Form>
            )}
        </Formik>
    </div>
);

export default Register;
