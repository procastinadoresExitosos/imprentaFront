import React from "react";
import FormUsuarios from "../../components/usuarios/formUsuarios/FormUsuarios";
import ListaUsuarios from "../../components/usuarios/listaUsuarios/ListaUsuarios";

{
  /* <div class="container-sm">
      <h1>Usuarios</h1>
      <div class="row">
        <div class="col">
          <FormUsuarios />
        </div>
        <div class="col">
          <ListaUsuarios />
        </div>
      </div>
    </div> */
}

export const ModuloUsuraios = () => {
  return (
    <div class="container-sm">
      <FormUsuarios />
      <ListaUsuarios />
    </div>
  );
};
