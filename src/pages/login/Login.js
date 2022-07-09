import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/usuarioEnSesion.slice";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ingresar = (data) => {
    dispatch(login(data));
    navigate("/");
  };

  return (
    <>
      <h1>Bienvenido</h1>
      <form onSubmit={handleSubmit(ingresar)}>
        <input
          type="text"
          name="usuario"
          placeholder="email"
          {...register("email")}
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          {...register("contrasena")}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
