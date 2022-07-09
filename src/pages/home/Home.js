import { useSelector } from "react-redux";

const Home = () => {
  const usuarioEnSesion = useSelector((state) => state.usuarioEnSesion);
  console.log(usuarioEnSesion);
  return (
    <>
      <h1>Home</h1>
      {!usuarioEnSesion ? (
        <h2>Ingrese en login</h2>
      ) : (
        <h2>Bienvenido {usuarioEnSesion?.usuario.nombre}</h2>
      )}
    </>
  );
};

export default Home;
