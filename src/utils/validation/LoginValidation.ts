import * as Yup from 'yup';

const LoginValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Number is required')
    .test('Valid Phone Number', 'Invalid Phone Number', (value) => {
      if (!value) return false;
      const phonePattern = /^[0-9]{10}$/;
      return phonePattern.test(value)
    }),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long'),
});

export default LoginValidationSchema;