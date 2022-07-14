import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  actualizarUsuarios,
  crearUsuarios,
} from "../../../store/slices/usuarios.slices";
import { getRoles } from "../../../store/slices/roles.slices";
import { seleccionar } from "../../../store/slices/selecActualizar.slice";
const FormUsuarios = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const roles = useSelector((state) => state.roles);
  const errores = useSelector((state) => state.errores);
  const elementoSeleccionado = useSelector(
    (state) => state.elementoSeleccionado
  );
  const usuarioEnSesion = useSelector((state) => state.usuarioEnSesion);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(elementoSeleccionado);
    if (elementoSeleccionado) {
      reset(elementoSeleccionado);
    }
    dispatch(getRoles());
  }, [dispatch, elementoSeleccionado, reset]);

  const enviar = (data) => {
    if (elementoSeleccionado) {
      data.id = elementoSeleccionado.id;
      dispatch(actualizarUsuarios(data));
    } else {
      dispatch(crearUsuarios(data));
    }
  };

  const cancelar = () => {
    reset(null);
    dispatch(seleccionar(null));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(enviar)}>
          {elementoSeleccionado ? (
            <div>
              <label htmlFor="telefono">Telefono</label> <br />
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
          ) : (
            <>
              <div>
                <label htmlFor="nombre">Nombre</label> <br />
                <input
                  type="text"
                  id="nombre"
                  placeholder="Nombre"
                  {...register("nombre", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.nombre && <p>{errors.nombre.message}</p>}
              </div>
              <div>
                <label htmlFor="apellido">Apellido</label> <br />
                <input
                  type="text"
                  id="apellido"
                  placeholder="Apellido"
                  {...register("apellido", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.apellido && <p>{errors.apellido?.message}</p>}
              </div>
              <div>
                <label htmlFor="telefono">Telefono</label> <br />
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
                <label htmlFor="dni">Dni</label> <br />
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
                <label htmlFor="email">Email</label> <br />
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
                <label htmlFor="contrasena">Contraseña</label> <br />
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
                  <>
                    <label htmlFor="rol">Rol</label> <br />
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
                  </>
                )}
              </div>
            </>
          )}
          <button>Registrar</button>

          {elementoSeleccionado && (
            <button onClick={() => cancelar()}>Cancelar</button>
          )}
        </form>
        {errores && <p>{errores.error.message}</p>}
      </div>
    </>
  );
};

export default FormUsuarios;
