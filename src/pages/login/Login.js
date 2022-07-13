import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/usuarioEnSesion.slice";
import { Errores } from "../../components/errores/Errores";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ingresar = (data) => {
    dispatch(login(data));
    if (localStorage.getItem("usuario")) {
      navigate("/");
    }
  };

  return (
    <>
      <h3>Bienvenido</h3>
      <form onSubmit={handleSubmit(ingresar)}>
        <div>
          <input
            type="text"
            name="usuario"
            placeholder="email"
            {...register("email")}
          />
        </div>
        <div>
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            {...register("contrasena")}
          />
        </div>
        <button>Login</button> <br />
        <Link to="/registrar">Registrate</Link>
      </form>
      <Errores />
    </>
  );
};

export default Login;
