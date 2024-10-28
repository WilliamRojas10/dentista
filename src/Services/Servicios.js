import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pacientes';  // Base URL de la API



export const _listarPacientesPaginado = async (pagina, tamanioPagina) => {
  try {
    const response = await axios.post(`${API_URL}/listar-paginado`, {
      pagina,       // Número de página que quieres obtener
      tamanioPagina  // Número de elementos por página
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener pacientes:", error);
    throw error;
  }
};


export const _obtenerPacientePorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener paciente:", error);
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


export const _eliminarPaciente = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    throw error;
  }
};
