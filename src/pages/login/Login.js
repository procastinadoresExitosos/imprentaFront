import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/usuarioEnSesion.slice";
import "./login.css";
import { setError } from "../../store/slices/errores.slice";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const errores = useSelector((state) => state.errores);
  console.log(errores);
  const ingresar = (data) => {
    dispatch(login(data));
  };

  return (
    <>
      <div className="container mt-5 login">
        <h3 className="text-light">Bienvenido</h3>
        <form onSubmit={handleSubmit(ingresar)}>
          <div className="mb-3">
            <label className="text-light" htmlFor="usuario">
              Usuario
            </label>{" "}
            <br />
            <input
              type="text"
              name="usuario"
              placeholder="email"
              {...register("email")}
            />
          </div>
          <div>
            <label className="text-light" htmlFor="contrasena">
              Contraseña
            </label>{" "}
            <br />
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              {...register("contrasena")}
            />
          </div>
          <div className="mt-4">
            <button className="btn btn-outline-success">Login</button>
            <Link
              onClick={() => {
                dispatch(setError(null));
              }}
              className="btn btn-outline-light"
              to="/registrar"
            >
              Regístrate
            </Link>
          </div>
        </form>
        {errores && (
          <div className="link-danger mt-3">{errores.error.message}</div>
        )}
      </div>
    </>
  );
};

export default Login;
