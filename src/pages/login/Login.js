import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const ingresar = (data) => {
    axios
      .post("http://localhost:8090/api/v1/usuarios/login/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        navigate("/");
        alert("Sesion iniciada correctamente");
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          alert("Credenciales incorrectas");
        }
      });
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
