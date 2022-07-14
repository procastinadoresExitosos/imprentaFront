import React from "react";
import FormUsuarios from "../../components/usuarios/formUsuarios/FormUsuarios";
import ListaUsuarios from "../../components/usuarios/listaUsuarios/ListaUsuarios";

export const ModuloUsuraios = () => {
  return (
    <>
      <h1>Usuarios</h1>
      <FormUsuarios />
      <ListaUsuarios />
    </>
  );
};
