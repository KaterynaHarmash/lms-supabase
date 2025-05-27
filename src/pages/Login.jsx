import { Formik, Form, Field, ErrorMessage } from "formik";
import {supabase} from '../supabaseClient';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          const { error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password,
          });

          if (error) {
            // Якщо щось не так — покажемо повідомлення
            setStatus(error.message);
          } else {
            // Якщо все ок — перенаправляємо
            navigate("/dashboard");
          }

          setSubmitting(false);
        }}
      >
        {props => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={props.isSubmitting}>
              Submit
            </button>
            {props.status && <div id="feedback" style={{ color: 'red' }}>{props.status}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
