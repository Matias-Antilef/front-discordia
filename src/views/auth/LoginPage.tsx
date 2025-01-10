import { useForm } from "react-hook-form";
import axios from "axios";
import { LoginModel } from "./model";
import AuthForm from "./components/auth-form";
import { PrivateRoutes, PublicRoutes } from "@/models/routes";
import TextField from "@/components/ui/text-field";
import { useNavigate } from "react-router";
import { useUser } from "@/context/hooks/useUser";
import { create } from "domain";

function LoginPage() {
  const { createUser } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>();
  const onSubmit = async (data: LoginModel) => {
    const response = await axios.post(
      import.meta.env.VITE_PUBLIC_SERVER_PORT + "/user/login",
      data,
      { withCredentials: true }
    );

    if (response.status === 200) {
      createUser({
        username: response.data.username,
        status: "online",
        friends: [],
        servers: [],
      });
      navigate(PrivateRoutes.DISCORDIA);
    }
  };

  return (
    <AuthForm
      footerMsg="¿No tienes cuenta?"
      footerMsgLink="Registrate"
      href={PublicRoutes.REGISTER}
      onSubmit={handleSubmit(onSubmit)}
      title="Iniciar sesión"
    >
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
  );
}
export default LoginPage;
