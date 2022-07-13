import React from "react";
import { useSelector } from "react-redux";

export const Errores = () => {
  const errores = useSelector((state) => state.errores);
  return (
    <>
      {errores && (
        <div>
          <p>
            {errores.status === 429 ? errores.error : errores.error.message}
          </p>
        </div>
      )}
    </>
  );
};
