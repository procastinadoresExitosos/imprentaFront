import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  actualizarRolUsuarios,
  crearUsuarios,
} from "../../../store/slices/usuarios.slices";
import { getRoles } from "../../../store/slices/roles.slices";
import { seleccionar } from "../../../store/slices/selecActualizar.slice";
import { useNavigate } from "react-router-dom";
import { setError } from "../../../store/slices/errores.slice";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (elementoSeleccionado) {
      reset(elementoSeleccionado);
    }
    dispatch(getRoles());
  }, [dispatch, elementoSeleccionado, reset]);

  const enviar = (data) => {
    if (elementoSeleccionado) {
      data.id = elementoSeleccionado.id;
      dispatch(actualizarRolUsuarios(data));
      cancelar();
    } else {
      dispatch(crearUsuarios(data)).then(() => {
        if (!usuarioEnSesion) {
          navigate("/login");
        } else {
          reset();
        }
      });
    }
  };

  const cancelar = () => {
    reset();
    dispatch(seleccionar(null));
    dispatch(setError(null));
  };

  return (
    <div className="container">
      <div>
        <h3 className="mb-4">
          Nuevo Usuario <i className="bi bi-person-circle"></i>
        </h3>
        <form onSubmit={handleSubmit(enviar)}>
          {elementoSeleccionado ? (
            <div className="form-floating">
              {usuarioEnSesion && (
                <>
                  <select
                    className="form-select"
                    id="rol"
                    {...register("rolId")}
                  >
                    <option value={null} disabled>
                      Seleccionar
                    </option>
                    {roles.map((el) => (
                      <option key={el.id} value={el.id}>
                        {el.nombre}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="rol">Roles</label>
                </>
              )}
            </div>
          ) : (
            <>
              {/* Nombres */}
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.nombre && "is-invalid"}`}
                  id="nombres"
                  placeholder="Nombres"
                  {...register("nombre", {
                    required: "Este campo es obligatorio",
                  })}
                />
                <label htmlFor="floatingInput">Nombres</label>
                {errors.nombre && (
                  <div className="link-danger">{errors.nombre.message}</div>
                )}
              </div>

              {/* Apellidos */}
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.apellido && "is-invalid"}`}
                  id="apellidos"
                  placeholder="Apellidos"
                  {...register("apellido", {
                    required: "Este campo es obligatorio",
                  })}
                />
                <label htmlFor="floatingInput">Apellidos</label>
                {errors.apellido && (
                  <div className="link-danger">{errors.apellido?.message}</div>
                )}
              </div>

              {/* Teléfono */}
              <div className="mb-3 form-floating">
                <input
                  type="tel"
                  className={`form-control ${errors.telefono && "is-invalid"}`}
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
                <label htmlFor="telefono">Teléfono</label>
                {errors.telefono && (
                  <div className="link-danger">{errors.telefono.message}</div>
                )}
              </div>

              {/* Dni */}
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.dni && "is-invalid"}`}
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
                <label htmlFor="dni">Dni</label>
                {errors.dni && (
                  <div className="link-danger">{errors.dni.message}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.email && "is-invalid"}`}
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
                <label htmlFor="email">Email</label>
                {errors.email && (
                  <div className="link-danger">{errors.email.message}</div>
                )}
              </div>

              {/* Contraseña */}
              <div className="mb-3 form-floating">
                <input
                  type="password"
                  className={`form-control ${
                    errors.contrasena && "is-invalid"
                  }`}
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
                <label htmlFor="email">Contraseña</label>
                {errors.contrasena && (
                  <div className="link-danger">{errors.contrasena.message}</div>
                )}
              </div>

              {/* Rol */}
              <div className="form-floating">
                {usuarioEnSesion && (
                  <>
                    <select
                      className="form-select"
                      id="rol"
                      defaultValue={1}
                      {...register("rolId")}
                    >
                      <option value={null} disabled>
                        Seleccionar
                      </option>
                      {roles.map((el) => (
                        <option key={el.id} value={el.id}>
                          {el.nombre}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="rol">Roles</label>
                  </>
                )}
              </div>
            </>
          )}
          <div>
            <button className="mt-3 btn btn-primary">Registrar</button>

            {elementoSeleccionado && (
              <button
                className="mt-3 btn btn-danger"
                onClick={() => cancelar()}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
        {errores && <div className="link-danger">{errores.error.message}</div>}
      </div>
    </div>
  );
};

export default FormUsuarios;
