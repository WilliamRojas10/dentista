import React, { useState } from "react";
import imgLogueo from "../Images/diente.jpg";
import "../styles/Pages/Login.css";
import { Input } from "../components/Input.jsx";
import { Link, useNavigate } from "react-router-dom";

function Loguin() {
  const [userDni, setUserDni] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();  // Evitar que el formulario se recargue
    console.log("Usuario:", userDni);
    console.log("Contraseña:", password);

    // Simulación de lógica de autenticación
    const coinciden = userDni === "william" && password === "william";

    if (coinciden) {
      setError(""); // Limpiar error si las credenciales son correctas
      navigate("/"); // Redirigir al inicio
    } else {
      setError("Usuario o Contraseña incorrecta"); // Mostrar mensaje de error
    }
  };

  return (
    <div className="login">
      <div className="box">
        <form className="login-form" onSubmit={login}>
          <Link className="title" to="/">SD ODONTOLOGIA</Link>

          <Input
            nombreGrupo="usuario"
            tipoInput="text"
            label="DNI:"
            value={userDni}
            onChange={(e) => setUserDni(e.target.value)}
            require={true}
          />

          <Input
            nombreGrupo="contrasenia"
            tipoInput="password"
            label="Contraseña:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            msjError={error}
            require={true}
          />

          <button type="submit" className="signin">Iniciar Sesión</button>
          <Link to="/createAccount" className="checkin"> Regístrate</Link>
          <Link to="/recoverAccount" className="recover"> ¿Has olvidado tu contraseña? </Link>
        </form>

        <div className="container-img">
          <img src={imgLogueo} alt="Icono de la app" />
        </div>
      </div>
    </div>
  );
}

export default Loguin;
