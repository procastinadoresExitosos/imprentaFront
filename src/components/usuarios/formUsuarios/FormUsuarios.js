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
        <h3 class="mb-4">Nuevo Usuario <i class="bi bi-person-circle"></i></h3>
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
              {/* Nombres */}
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class = {`form-control ${errors.nombre&&"is-invalid"}`}
                  id="floatingInput"
                  placeholder="Nombres"
                  {...register("nombre", {
                    required: "Este campo es obligatorio",
                  })}
                />
                <label for="floatingInput">Nombres</label> 
                {errors.nombre && <div class="link-danger">{errors.nombre.message}</div>}
              </div>

              {/* Apellidos */}
              <div class="form-floating mb-3">
                <input  
                  type="text"
                  class = {`form-control ${errors.apellido&&"is-invalid"}`}
                  id="floatingInput"
                  placeholder="Apellidos"
                  {...register("apellido", {
                    required: "Este campo es obligatorio",
                  })}
                />
                <label for="floatingInput">Apellidos</label> 
                {errors.apellido && <div class="link-danger">{errors.apellido?.message}</div>}
              </div>

              {/* Teléfono */}
              <div class="form-floating mb-3">
                <input
                  type="tel"
                  class = {`form-control ${errors.telefono&&"is-invalid"}`}
                  id="telefono"
                  placeholder="Teléfono"
                  maxLength={9}
                  {...register("telefono", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /9[0-9]{8}/,
                      message: "Ingrese un telefono válido",
                    },
                  })}
                />
                <label for="telefono">Teléfono</label> 
                {errors.telefono && <div class="link-danger">{errors.telefono.message}</div>}
              </div>

              {/* Dni */}
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class = {`form-control ${errors.dni&&"is-invalid"}`}
                  id="dni"
                  placeholder="Dni"
                  maxLength={8}
                  {...register("dni", {
                    required: "Este campo es obligatorio",
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
                <label for="dni">Dni</label> 
                {errors.dni && <div class="link-danger">{errors.dni.message}</div>}
              </div>

              {/* Email */}
              <div class="form-floating mb-3">
                <input
                  type="text" 
                  class = {`form-control ${errors.email&&"is-invalid"}`}
                  id="email" 
                  placeholder="Email"
                  {...register("email", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Ingrese un email correcto",
                    },
                  })}
                />
                <label for="email">Email</label> 
                {errors.email && <div class="link-danger">{errors.email.message}</div>}
              </div>

              {/* Contraseña */}
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class = {`form-control ${errors.contrasena&&"is-invalid"}`}
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
                <label for="email">Contraseña</label> 
                {errors.contrasena && <div class="link-danger">{errors.contrasena.message}</div>}
              </div>

              {/* Rol */}
              <div class="form-floating">
                {usuarioEnSesion && (
                  <>
                    <select class="form-select" id="rol" {...register("rolId")}>
                      <option selected value={null} disabled>
                        Seleccionar
                      </option>
                      {roles.map((el) => (
                        <option key={el.id} value={el.id}>
                          {el.nombre}
                        </option>
                      ))}
                    </select>
                    <label for="rol">Roles</label>
                  </>
                )}
              </div>
            </>
          )}

          <button class="btn btn-primary mt-3">Registrar</button>

          {elementoSeleccionado && (
            <button onClick={() => cancelar()}>Cancelar</button>
          )}
        </form>
        {errores && <div class="link-danger">{errores.error.message}</div>}
      </div>
    </>
  );
};

export default FormUsuarios;
