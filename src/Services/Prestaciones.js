import axios from 'axios';

const API_URL = 'http://localhost:5000/api/Prestacions';  // Base URL de la API



export const _listarPrestacionesPaginado = async (pagina, tamanioPagina) => {
  try {
    const response = await axios.post(`${API_URL}/listar-paginado`, {
      pagina,       // Número de página que quieres obtener
      tamanioPagina  // Número de elementos por página
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener prestaciones:", error);
    throw error;
  }
};


export const _obtenerPrestacionPorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener una prestacion:", error);
    throw error;
  }
};


export const _crearPrestacion = async ( prestacionData ) => {
  try {
    const response = await axios.post(`${API_URL}/`, prestacionData);
    return response.data;
  } catch (error) {
    console.error("Error al crear una prestacion:", error);
    throw error;
  }
};



export const _actualizarPrestacion = async (id, prestacionData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, prestacionData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar una prestacion:", error);
    throw error;
  }
};


export const _eliminarPrestacion = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar una prestacion:", error);
    throw error;
  }
};
