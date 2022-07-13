import React from "react";
import { Link } from "react-router-dom";

export const NotFoundError = () => {
  return (
    <>
      <h1>Página no encontrada</h1>
      <Link to="/">Regresar a inicio</Link>
    </>
  );
};
