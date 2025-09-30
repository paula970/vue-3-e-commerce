import axios from 'axios';

// 1. Crear instancia de Axios con la URL base de tu API
const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Interceptor de Solicitudes (Request)
apiClient.interceptors.request.use(
  (config) => {
    // Añadir cabeceras comunes a todas las peticiones, como un token de autorización.
    // Por ejemplo:
    // const token = 'tu_token_aqui';
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Interceptor de Respuestas (Response)
apiClient.interceptors.response.use(
  (response) => {
    // Procesa respuestas exitosas antes de que lleguen a los servicios.
    return response;
  },
  (error) => {
    // Manejo global de errores de la API.
    // Puedes mostrar notificaciones al usuario o redirigir a una página de error.
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error('Error de la API:', error.response.status, error.response.data);
      if (error.response.status === 401) {
        // Lógica para tokens caducados o no autorizados
        console.warn('¡Acceso no autorizado!');
      }
    } else if (error.request) {
      // La petición se hizo pero no se recibió respuesta
      console.error('No se pudo conectar con el servidor.');
    } else {
      // Algo sucedió al configurar la petición
      console.error('Error al configurar la petición:', error.message);
    }
    return Promise.reject(error);
  }
);

// 4. Exporta la instancia configurada
export default apiClient;