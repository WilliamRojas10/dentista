import axios from 'axios';

const API_URL = 'http://localhost:5292/api/Profesional';  // Base URL de la API


//http://localhost:5292/api/Profesional/listar-profesionales?pagina=1&tamanoPagina=10&columna=Nombre&orden=asc

export const _listarProfesionalesPaginado = async (pagina, tamanioPagina, columna, orden) => {
  try {
    const response = await axios.get(`${API_URL}/listar-profesionales`, {
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
    console.error("Error al obtener profesionales:", error);
    throw error;
  }
};
//http://localhost:5292/api/Profesional/busqueda?pagina=1&tamanioPagina=10
export const _buscarProfesional = async (filtro, pagina, tamanioPagina) => {
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
    console.error("Error obteniendo profesional al buscar:", error);
    throw error;
  }
};


export const _obtenerProfesionalPorId = async (idProfesional) => {
  try {
    const response = await axios.get(`${API_URL}/${idProfesional}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar profesional:", error);
    throw error;
  }
};

export const _obtenerProfesionalPorDni = async (dniProfesional) => {
  try {
    const response = await axios.get(`${API_URL}/obtener-profesional/${dniProfesional}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar profesional:", error);
    throw error;
  }
};


export const _crearProfesional = async (profesionalDTO) => {
  try {
    console.log("Datos del profesional:", profesionalDTO); // Para depuración
    const response = await axios.post(`${API_URL}`, profesionalDTO, {
      headers: {
        'Content-Type': 'application/json', // Asegúrate de que sea el tipo correcto
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear profesional:", error.response ? error.response.data : error.message);
    throw error;
  }
};



export const _actualizarProfesional = async (idProfesional, profesionalDTO) => {
  try {
    const response = await axios.put(`${API_URL}/${idProfesional}`, profesionalDTO);
    console.log("Profesional actualizado EN SERVICE:", response);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar profesional:", error);
    throw error;
  }
};


export const _eliminarProfesional = async (idProfesional) => {
  try {
    const response = await axios.put(`${API_URL}/eliminar/${idProfesional}`,{
      params: { idProfesional }
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar profesional:", error);
    throw error;
  }
};
