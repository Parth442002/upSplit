import * as Yup from 'yup';

const RegisterValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .required('Number is required')
    .test('Valid Phone Number', 'Invalid Phone Number', (value) => {
      if (!value) return false;
      const phonePattern = /^[0-9]{10}$/;
      return phonePattern.test(value)
    }),
  username:Yup.string()
    .required("Username is Required")
    .min(5,"Username must be atleast 5 characters long")
    .max(15,"Username must be less than 15 characters")
  ,
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

export default RegisterValidationSchema;