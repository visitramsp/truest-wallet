import * as Yup from 'yup';


const LoginSchema = Yup.object({
  email: Yup.string().email().required('Please Enter Your Email'),
  password: Yup.string().min(5).required('Please Enter Your Password')
});
const SignUpSchema = Yup.object({
  name: Yup.string().required('Please Enter Your Name'),
  email: Yup.string().email().required('Please Enter Your Email'),
  password: Yup.string().required('Please Enter Your Password')
});
const ForgetPasswordSchema = Yup.object({
  email: Yup.string().email().required('Please Enter Your Email'),
  password: Yup.string().min(5).required('Please Enter Your Password')
});

export { LoginSchema, SignUpSchema, ForgetPasswordSchema };