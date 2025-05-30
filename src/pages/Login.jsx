import { Formik, Form, Field, ErrorMessage } from "formik";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";
import PageTitle from "../components/PageTitle";
import FieldGroup from "../components/FieldGroup";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <PageTitle>Sign In</PageTitle>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { error } = await supabase.auth.signInWithPassword({
              email: values.email,
              password: values.password,
            });
            if (!error) {
              const {
                data: { user },
              } = await supabase.auth.getUser();

              if (user) {
                const { data: profile, error: profileError } = await supabase
                  .from("profiles")
                  .select("id")
                  .eq("id", user.id)
                  .single();
                try {
                  const pendingUserRaw = localStorage.getItem("pendingUser");
                  const pendingUser = pendingUserRaw
                    ? JSON.parse(pendingUserRaw)
                    : null;
                  const fullName = pendingUser?.fullName || "Без імені";

                  if (!profile && !profileError) {
                    const { error: insertError } = await supabase
                      .from("profiles")
                      .insert({
                        id: user.id,
                        full_name: fullName,
                        role: "32bddf9a-e7c3-45f6-a6cc-630943512b3a",
                      });

                    if (insertError) {
                      toast.error(
                        "Не вдалося створити профіль: " + insertError.message
                      );
                    }
                  }

                  localStorage.removeItem("pendingUser");
                } catch (e) {
                  console.error("Помилка при створенні профілю:", e);
                  toast.error("Щось пішло не так при створенні профілю.");
                }
              }

              toast.success("Вхід успішний!");
              navigate("/dashboard");
            }

            if (error) {
              toast.error(error.message || "Не вдалося увійти");
            } else {
              toast.success("Успішний вхід!");
              navigate("/dashboard");
            }
          } catch (e) {
            console.error("Login error:", e);
            toast.error("Щось пішло не так під час входу.");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(props) => (
          <Form>
            <FieldGroup
              name="email"
              label="Email"
              type="email"
              placeholder="jane@acme.com"
            />
            <FieldGroup name="password" label="Password" type="password" />
            <Button
              type="submit"
              variant="primary"
              loading={props.isSubmitting}
            >
              Увійти
            </Button>
          </Form>
        )}
      </Formik>
    </PageWrapper>
  );
}
