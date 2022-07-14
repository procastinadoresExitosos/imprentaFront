import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsuarios } from "../../../store/slices/usuarios.slices";
import { seleccionar } from "../../../store/slices/selecActualizar.slice";

const ListaUsuarios = () => {
  const usuarios = useSelector((state) => state.usuarios);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  return (
    <div class="container-sm mt-5">
      <h3>Listado de usuarios</h3>
      {usuarios.length === 0 ? (
        <h2>No hay usuarios registrados</h2>
      ) : (

        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Dni</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((el) => (
              <tr key={el.id}>
                <td>{el.nombre}</td>
                <td>{el.apellido}</td>
                <td>{el.dni}</td>
                <td>{el.rol.nombre}</td>
                <td>{el.estado}</td>
                <td>
                  <button class="btn btn-outline-info" onClick={() => dispatch(seleccionar(el))}>
                  <i class="bi bi-pencil-square"></i>
                  </button>
                  &nbsp;&nbsp;
                  <button class="btn btn-outline-danger" onClick={() => {}}>
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaUsuarios;
