import React, { useState} from "react";
import imgLogueo from "../Images/diente.jpg";
import "../styles/Login.css";
import { Input } from "./Input.jsx"
import { Link, useNavigate} from "react-router-dom";
function Loguin(props) {
  const [userDni, setUserDni] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const route = useNavigate();

  const login = () => {
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, podrías hacer una solicitud AJAX a un servidor para verificar las credenciales.

    // En este ejemplo, simplemente mostramos un mensaje en la consola.
    console.log('Usuario:', userDni);
    console.log('Contraseña:', password);

    // Simulando una lógica de autenticación
    const coinciden = userDni === "12345678" && password === "rojas";

    (coinciden) ? setError("") :
      setError("Usuario o Contraseña incorrecta");
    if (coinciden) {
      route("/calendario");
    }
  }

  return (
    <div className="login">
      <div className="box">
        <form className="login-form">
          <h2>SD ODONTOLOGIA{props.tienda}</h2>
          <Input
            nombreGrupo="usuario"
            tipoInput="text"
            label="DNI:"
            value={userDni}
            onChange={(e) => setUserDni(e.target.value)}
          />

          <Input
            nombreGrupo="contrasenia"
            tipoInput="password"
            label="Contraseña:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            msjError={error}
          />

          
          

          <button onClick={login} className="signin">Iniciar Sesión</button>

          <Link to="/createAccount" className="checkin"> Regístrate</Link>
          
            
          <Link to="/recoverAccount" className="recover"> ¿Has olvidado tu contraseña? </Link>
         
        </form>

        <div className="container-img">
          <img src={imgLogueo} alt="Icono de la app"  />
        </div>
      </div>
    </div>
  );
}

export default Loguin;
