import * as Yup from 'yup';

export const regSchema = Yup.object().shape({
    email: Yup.string()
        .required('* Обов’язкове поле')
        .email('Введіть коректну адресу'),
    password: Yup.string()
        .min(5, 'Введіть більше 5 символів')
        .max(10, 'Введіть менше 10 символів')
        .required('* Обов’язкове поле'),
    confirmPassword: Yup.string()
        .required('* Обов’язкове поле')
        .oneOf([Yup.ref('password'), null], 'Паролi повиннi спiвпадати!'),
});

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required('* Обов’язкове поле')
        .email('Введіть коректну адресу'),
    password: Yup.string()
        .min(5, 'Введіть більше 5 символів')
        .max(10, 'Введіть менше 10 символів')
        .required('* Обов’язкове поле'),
});
