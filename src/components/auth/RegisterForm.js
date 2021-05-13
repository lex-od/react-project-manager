import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { regSchema } from '../common/Validations/AuthValidInput';
import css from './Auth.module.scss';
import AuthBackgroundDesktop from './AuthBackground/BackgroundDesktop/BackgroundDesktop';
import BackgroundTablet from './AuthBackground/BackgroundTablet/BackgroundTablet';
import AccentButton from '../common/AccentButton/AccentButton';
import useDeviceSizes from '../../services/utils/useDeviceSize';

export default function Register() {
    const dispatch = useDispatch();

    const { isTabletDevice, isDesktopDevice } = useDeviceSizes();

    return (
        <div className={css.formWraper}>
            {isDesktopDevice && <AuthBackgroundDesktop />}
            {isTabletDevice && <BackgroundTablet />}
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
                {({ touched, errors, isSubmitting }) => (
                    <Form className={css.registerForm}>
                        <h2 className={css.registerFormTitle}>Реєстрація</h2>
                        <Field
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className={`${css.registerFormInput} ${
                                touched.email && errors.email
                                    ? ` ${css.isinvalid}`
                                    : ''
                            }`}
                        />
                        <ErrorMessage
                            className={css.errorMessageEmail}
                            name="email"
                            component="div"
                        />
                        <Field
                            autoComplete="on"
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            className={`${css.registerFormInput} ${
                                touched.password && errors.password
                                    ? ` ${css.isinvalid}`
                                    : ''
                            }`}
                        />
                        <ErrorMessage
                            className={css.errorMessagePassword}
                            name="password"
                            component="div"
                        />
                        <Field
                            autoComplete="on"
                            type="password"
                            name="confirmPassword"
                            placeholder="Повторіть пароль"
                            className={`${css.registerFormInput} ${
                                touched.password && errors.password
                                    ? ` ${css.isinvalid}`
                                    : ''
                            }`}
                        />
                        <ErrorMessage
                            className={css.errorMessageConfirmPassword}
                            name="confirmPassword"
                            component="div"
                        />

                        <AccentButton
                            className={css.registerPageButton}
                            type="submit"
                        >
                            Зареєструватися
                        </AccentButton>

                        <p className={css.registerFormText}>
                            Маєте акаунт? {'  '}
                            <NavLink
                                className={css.registerFormText}
                                to="/login"
                                exact
                            >
                                Увійти
                            </NavLink>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
