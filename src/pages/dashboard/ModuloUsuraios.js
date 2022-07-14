import React from "react";
import FormUsuarios from "../../components/usuarios/formUsuarios/FormUsuarios";
import ListaUsuarios from "../../components/usuarios/listaUsuarios/ListaUsuarios";

export const ModuloUsuraios = () => {
  return (
    <div class="container-sm">
      <FormUsuarios />
      <ListaUsuarios />
    </div>
  );
};
