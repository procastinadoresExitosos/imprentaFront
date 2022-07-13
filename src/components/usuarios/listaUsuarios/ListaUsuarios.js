import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsuarios } from "../../../store/slices/usuarios.slices";

const ListaUsuarios = () => {
  const usuarios = useSelector((state) => state.usuarios);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);
  console.log(usuarios);
  return (
    <>
      {usuarios.length === 0 ? (
        <h2>No hay usuarios registrados</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dni</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((el) => (
              <tr>
                <td>{`${el.nombre} ${el.apellido}`}</td>
                <td>{el.dni}</td>
                <td>{el.rol.nombre}</td>
                <td>{el.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ListaUsuarios;
