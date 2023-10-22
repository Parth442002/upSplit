import * as Yup from 'yup';

const RegisterValidationSchema = Yup.object().shape({
  identifier: Yup.string()
    .required('Identifier is required')
    .test('valid-identifier', 'Invalid identifier', (value) => {
      if (!value) return false; // Return false if empty
      const phonePattern = /^[0-9]{10}$/; // 10-digit phone number pattern
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/; // Email pattern
      return phonePattern.test(value) || emailPattern.test(value);
    }),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'),], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default RegisterValidationSchema;