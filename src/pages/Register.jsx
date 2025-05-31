import { Formik, Form, Field, ErrorMessage } from "formik";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";
import PageTitle from "../components/PageTitle";
import FieldGroup from "../components/FieldGroup";
import Button from "../components/Button";
import AuthPageLayout from "../components/AuthPageLayout";

export default function Register() {
  const navigate = useNavigate();

  return (
    <AuthPageLayout>
      <PageTitle>Sign Up</PageTitle>
      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { data, error } = await supabase.auth.signUp({
              email: values.email,
              password: values.password,
            });

            if (error) {
              toast.error(error.message || "Помилка при реєстрації");
            } else {
              localStorage.setItem(
                "pendingUser",
                JSON.stringify({
                  fullName: values.fullName,
                  email: values.email,
                })
              );

              toast.success(
                "Реєстрація успішна! Перевірте свою пошту для підтвердження."
              );
            }
          } catch (err) {
            toast.error("Щось пішло не так під час реєстрації.");
            console.error(err);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(props) => (
          <Form>
            <FieldGroup
              name="fullName"
              label="Full Name"
              placeholder="Jane Doe"
            />
            <FieldGroup
              name="email"
              label="Email"
              type="email"
              placeholder="jane@acme.com"
            />
            <FieldGroup name="password" label="Пароль" type="password" />
            <Button
              type="submit"
              variant="primary"
              loading={props.isSubmitting}
            >
              Зареєструватись
            </Button>
          </Form>
        )}
      </Formik>
    </AuthPageLayout>
  );
}
