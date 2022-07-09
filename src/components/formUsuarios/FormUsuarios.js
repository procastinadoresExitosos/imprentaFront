import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRoles } from "../../store/slices/roles.slices";
import axios from "axios";
const FormUsuarios = () => {
  const { handleSubmit, register } = useForm();

  const roles = useSelector((state) => state.roles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const registrar = (data) => {
    axios
      .post("http://localhost:8090/api/v1/usuarios/", data)
      .then((res) => {
        alert("Sesion iniciada correctamente");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 404) {
          alert("Credenciales incorrectas");
        }
      });
  };

  return (
    <>
      <h2>Usuarios</h2>
      <form onSubmit={handleSubmit(registrar)}>
        <input type="text" id="nombre" {...register("nombre")} />
        <input type="text" id="apellido" {...register("apellido")} />
        <input type="tel" id="telefono" {...register("telefono")} />
        <input type="number" id="dni" {...register("dni")} />
        <input type="email" id="email" {...register("email")} />
        <input type="password" id="contrasena" {...register("contrasena")} />
        <select name="" id="">
          {roles.map((el) => (
            <option key={el.id}>{el.nombre}</option>
          ))}
        </select>
        <button>Registrar</button>
      </form>
    </>
  );
};

export default FormUsuarios;
