import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../common/Validations/AuthValidInput';
import css from './Auth.module.scss';
import AuthBackgroundDesktop from './AuthBackground/BackgroundDesktop/BackgroundDesktop';
import BackgroundTablet from './AuthBackground/BackgroundTablet/BackgroundTablet';
import AccentButton from '../common/AccentButton/AccentButton';
import useWindowSize from '../common/utils/useWindouSize';

export default function Login() {
    const dispatch = useDispatch();
    const { width } = useWindowSize();
    return (
        <div className={css.formWraper}>
            {width > 1199 && <AuthBackgroundDesktop />}
            {width > 767 && width < 1198 && <BackgroundTablet />}
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={values => {
                    const { email, password } = values;
                    dispatch(authOps.login({ email, password }));
                }}
            >
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
                    <AccentButton
                        className={css.registerPageButton}
                        type="submit"
                    >
                        Увійти
                    </AccentButton>

                    <p className={css.registerFormText}>
                        Маєте аккаунт?{' '}
                        <NavLink to="/register">Зареєструватись</NavLink>
                    </p>
                </Form>
            </Formik>
        </div>
    );
}
