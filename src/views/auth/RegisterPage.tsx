import { useForm } from "react-hook-form";
import axios from "axios";
import { RegisterModel } from "./model";
import AuthForm from "./components/auth-form";
import { PublicRoutes } from "@/models/routes";
import TextField from "@/components/ui/text-field";
import { useNavigate } from "react-router";
function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterModel>();

  async function onSubmit(data: RegisterModel) {
    try {
      const response = await axios.post(
        import.meta.env.VITE_PUBLIC_SERVER_PORT + "/user/register",
        data
      );
      if (response.status === 201) {
        navigate(PublicRoutes.LOGIN);
        reset();
      }

      console.error(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        title="Registrarse"
        href={PublicRoutes.LOGIN}
        footerMsg="¿Ya tienes cuenta?"
        footerMsgLink="Iniciar sesión"
      >
        <TextField
          {...register("username", {
            required: {
              value: true,
              message: "Nombre de usuario es requerido",
            },
          })}
          label="Nombre de usuario"
          type="text"
          error={errors.username?.message}
        />

        <TextField
          {...register("email", {
            required: {
              value: true,
              message: "Email es requerido",
            },
          })}
          label="Email"
          type="email"
          error={errors.email?.message}
        />

        <TextField
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
          })}
          label="Contraseña"
          type="password"
          error={errors.password?.message}
        />
      </AuthForm>
    </>
  );
}
export default RegisterPage;
