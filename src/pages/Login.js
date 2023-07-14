//import { Helmet} from 'react-helmet-async';// для додавання метатегу title 
import { LoginForm } from 'components/loginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

export default function Login() {
  return (
    <div>
      <RegisterForm>
        <title>Login</title>
      </RegisterForm>
      <LoginForm />
    </div>
  );
}
