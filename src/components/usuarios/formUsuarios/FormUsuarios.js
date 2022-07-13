import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { crearUsuarios } from "../../../store/slices/usuarios.slices";
import { getRoles } from "../../../store/slices/roles.slices";
const FormUsuarios = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const roles = useSelector((state) => state.roles);
  const errores = useSelector((state) => state.errores);
  const usuarioEnSesion = useSelector((state) => state.usuarioEnSesion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const registrar = (data) => {
    dispatch(crearUsuarios(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(registrar)}>
        <div>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            {...register("nombre", { required: "Este campo es obligatorio" })}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>
        <div>
          <input
            type="text"
            id="apellido"
            placeholder="Apellido"
            {...register("apellido", { required: "Este campo es obligatorio" })}
          />
          {errors.apellido && <p>{errors.apellido?.message}</p>}
        </div>
        <div>
          <input
            type="tel"
            id="telefono"
            placeholder="Telefono"
            {...register("telefono", {
              required: "este campo es obligatorio",
              pattern: {
                value: /9[0-9]{8}/,
                message: "Ingrese un telefono válido",
              },
            })}
          />
          {errors.telefono && <p>{errors.telefono.message}</p>}
        </div>
        <div>
          <input
            type="text"
            id="dni"
            placeholder="Dni"
            {...register("dni", {
              required: "este campo es obligatorio",
              pattern: {
                value: /[0-9]{8}/,
                message: "Ingrese un dni válido",
              },
              maxLength: {
                value: 8,
                message: "Ingrese un DNI válido",
              },
            })}
          />
          {errors.dni && <p>{errors.dni.message}</p>}
        </div>
        <div>
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "este campo es obligatorio",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Ingrese un email correcto",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            id="contrasena"
            placeholder="Contraseña"
            {...register("contrasena", {
              required: "Este campo es obliatorio",
              minLength: {
                value: 8,
                message: "La contraseña debe tener almenos 8 caracteres",
              },
            })}
          />
          {errors.contrasena && <p>{errors.contrasena.message}</p>}
        </div>
        <div>
          {usuarioEnSesion && (
            <select id="rol" {...register("rolId")}>
              <option value="" disabled>
                Seleccione el rol
              </option>
              {roles.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.nombre}
                </option>
              ))}
            </select>
          )}
        </div>
        <button>Registrar</button>
      </form>
      {errores && <p>{errores.error.message}</p>}
    </div>
  );
};

export default FormUsuarios;
