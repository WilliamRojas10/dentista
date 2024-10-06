import { Input } from "../components/Input.jsx"
import React, { useState } from "react"
import "../styles/Pages/RecoverAccount.css"

function RecoverAccount() {
    const [telefono, settelefono] = useState("")
    const [dni, setDni] = useState("")
    const [error, setError] = useState("")

    const verificar = () => {
        console.log('telefono:', telefono);
        console.log('Dni:', dni);
        const coinciden = telefono === "william@gmail.com" && dni === "44170911";
        (coinciden) ? setError("") :
            setError("No existe tu usuario");
    }
    return (
        <div className="recover-account">
            <div className="box">
                <h2>Recuperar cuenta</h2>

                <Input
                    nombreGrupo={"dni"}
                    label={"DNI:"}
                    tipoInput={"text"}
                    placeholder={"12 345 678"}
                    value={dni}
                    onChange={(e) => { setDni(e.target.value) }}
                    msjError={error}
                />

                <Input
                    nombreGrupo={"telefono"}
                    label={"Ingrese su teléfono:"}
                    tipoInput={"telefono"}
                    placeholder={"351 123 4567"}
                    value={telefono}
                    onChange={(e) => settelefono(e.target.value)}
                />
                <button type="submit" onClick={verificar}>
                    Verificar
                </button>
            </div>
        </div>
    )
}

export default RecoverAccount