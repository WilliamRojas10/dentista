import axios from 'axios';

const API_URL = 'http://localhost:5292/api/Paciente';  // Base URL de la API


//http://localhost:5292/api/Paciente/listar-pacientes?pagina=1&tamanoPagina=10&columna=Nombre&orden=asc

export const _listarPacientesPaginado = async (pagina, tamanioPagina, columna, orden) => {
  try {
    const response = await axios.get(`${API_URL}/listar-pacientes`, {
      params: { 
        pagina,      
        tamanioPagina,
        columna,
        orden
      }
    });
    console.log("tamaño de pagina --->", tamanioPagina);
    return response.data;
  } catch (error) {
    console.error("Error al obtener pacientes:", error);
    throw error;
  }
};
//http://localhost:5292/api/Paciente/busqueda?pagina=1&tamanioPagina=10
export const _buscarPaciente = async (filtro, pagina, tamanioPagina) => {
  try {
    const response = await axios.get(`${API_URL}/busqueda`, {
      params: { 
        filtro ,
        pagina,      
        tamanioPagina,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error obteniendo paciente al buscar:", error);
    throw error;
  }
};


export const _obtenerPacientePorId = async (idPaciente) => {
  try {
    const response = await axios.get(`${API_URL}/${idPaciente}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    throw error;
  }
};

export const _obtenerPacientePorDni = async (dniPaciente) => {
  try {
    const response = await axios.get(`${API_URL}/obtener-paciente/${dniPaciente}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    throw error;
  }
};


export const _crearPaciente = async (pacienteDTO) => {
  try {
    console.log("Datos del paciente:", pacienteDTO); // Para depuración
    const response = await axios.post(`${API_URL}`, pacienteDTO, {
      headers: {
        'Content-Type': 'application/json', // Asegúrate de que sea el tipo correcto
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear paciente:", error.response ? error.response.data : error.message);
    throw error;
  }
};



export const _actualizarPaciente = async (idPaciente, pacienteDTO) => {
  try {
    const response = await axios.put(`${API_URL}/${idPaciente}`, pacienteDTO);
    console.log("Paciente actualizado EN SERVICE:", response);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar paciente:", error);
    throw error;
  }
};


export const _eliminarPaciente = async (idPaciente) => {
  try {
    const response = await axios.put(`${API_URL}/eliminar/${idPaciente}`,{
      params: { idPaciente }
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    throw error;
  }
};
