import { Input, ListaPlegable } from "./Input.jsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateAccount.css"

function CreateAccount() {
	const paises = ["Argentina", "Brasil", "Chile", "Bolivia", "Colombia", "Ecuador", "Perú", "Uruguay", "Venezuela", "Paraguay"]
	const codigoArea = ["+54 🇦🇷", "+1 🇺🇸"]
	const navigate = useNavigate();
	//TODO- Validar los input vacios y Conectar con la api

	const toLogin = () => {
		navigate("/login");
	};
	return (
		<div className="create-account">
			<form action="" className="form">
				<h2>Registro de Usuario</h2>
				<div className="container-3">
					<Input
						nombreGrupo="nombre"
						label="Nombre:"
						tipoInput="text"
						placeholder="Nombre"
						require={true}

					/>
					<Input
						nombreGrupo="apellido"
						label="Apellido:"
						tipoInput="text"
						placeholder="Apellido"
						require={true}

					/>

					<Input
						nombreGrupo="fecha-nacimiento"
						label="Fecha de Nacimiento:"
						tipoInput="date"
						placeholder=""
						require={true}

					/>
				</div>
				<div className="container-3">

					<Input
						nombreGrupo="barrio"
						label="Barrio:"
						tipoInput="text"
						placeholder="Bº Nueva Cordoba📍"
					/>
					<Input
						nombreGrupo="calle"
						label="Calle (opcional):"
						tipoInput="text"
						placeholder="Hipolito Irigoyen"
					/>
					<Input
						nombreGrupo="numero"
						label="Número (opcional):"
						tipoInput="text"
						placeholder="1234"
					/>
				</div>
				<div className="container-3">

					<ListaPlegable
						nombreGrupo="nacionalidad"
						label="Nacionalidad;"
						placeholder="Seleccionar"
						opciones={paises}
						require={true}

					/>


					<div className="container-1">
						<ListaPlegable
							nombreGrupo="codigoArea"
							label="Teléfono :"
							placeholder="Área 🌐"
							opciones={codigoArea}
						/>
						<Input
							nombreGrupo="telefono"
							label="."
							tipoInput="text"
							placeholder="351 123 4567"
						/>

					</div>
					<Input
						nombreGrupo="email"
						label="Correo electrónico (opcional):"
						tipoInput="text"
						placeholder="nombre_usuario@gmail.com"
					/>
				</div>

				<div className="container-2">

					<Input
						nombreGrupo="numero-documento"
						label="DNI (Numero de Documento)"
						tipoInput="text"
						placeholder="DNI: 12.345.987"
						require={true}

					/>

					<Input
						nombreGrupo="contrasenia"
						label="Contraseña:"
						tipoInput="password"
						placeholder=""
						require={true}
					/>

				</div>
				<button className="btn" type="submit" onClick={toLogin} >
					Crear Cuenta
				</button>
			</form>
		</div>
	)
}

export default CreateAccount;