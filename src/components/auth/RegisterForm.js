import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { regSchema } from '../common/Validations/AuthValidInput';
import css from './Auth.module.scss';
import AuthBackgroundDesktop from './AuthBackground/BackgroundDesktop/BackgroundDesktop';
import BackgroundTablet from './AuthBackground/BackgroundTablet/BackgroundTablet';
import AccentButton from '../common/AccentButton/AccentButton';
import useWindowSize from '../common/utils/useWindouSize';

export default function Register() {
    const dispatch = useDispatch();
    const { width } = useWindowSize();
    return (
        <div className={css.formWraper}>
            {width > 1199 && <AuthBackgroundDesktop />}
            {width > 767 && width < 1198 && <BackgroundTablet />}
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
                    <Form className={css.registerForm}>
                        <h2 className={css.registerFormTitle}>Реєстрація</h2>
                        <Field
                            className={css.registerFormInput}
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
                            autoComplete="on"
                            className={css.registerFormInput}
                            type="password"
                            name="password"
                            placeholder="Пароль"
                        />
                        <ErrorMessage
                            className={css.errorMessagePassword}
                            name="password"
                            component="span"
                        />
                        <Field
                            autoComplete="on"
                            className={css.registerFormInput}
                            type="password"
                            name="confirmPassword"
                            placeholder="Повторіть пароль"
                        />
                        <ErrorMessage
                            className={css.errorMessageConfirmPassword}
                            name="confirmPassword"
                            component="span"
                        />

                        <AccentButton
                            className={css.registerPageButton}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Зареєструватися
                        </AccentButton>

                        <p className={css.registerFormText}>
                            Маєте акаунт? {'  '}
                            <NavLink to="/login" exact>
                                Увійти
                            </NavLink>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
