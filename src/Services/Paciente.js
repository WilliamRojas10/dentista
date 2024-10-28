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
//http://localhost:5292/api/Paciente/eliminar?idPaciente=2

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


export const _crearPaciente = async (pacienteData) => {
  try {
    const response = await axios.post(`${API_URL}/`, pacienteData);
    return response.data;
  } catch (error) {
    console.error("Error al crear paciente:", error);
    throw error;
  }
};


export const _actualizarPaciente = async (id, pacienteData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, pacienteData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar paciente:", error);
    throw error;
  }
};


export const _obtenerPacientePorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    throw error;
  }
};
