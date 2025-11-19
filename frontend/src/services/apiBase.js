// Clase base para servicios API

class ApiBase {
  constructor(baseUrl) {
    this.apiUrl = baseUrl;
  }

  // Obtener headers con autenticación
  getHeaders(includeAuth = true) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  // Método para peticiones HTTP
  async makeRequest(endpoint, options = {}, includeAuth = true) {
    try {
      const response = await fetch(`${this.apiUrl}${endpoint}`, {
        ...options,
        headers: {
          ...this.getHeaders(includeAuth),
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || `Error HTTP: ${response.status}`;
        throw new Error(errorMessage);
      }

      return { success: true, data };
    } catch (error) {
      console.error(`Error en ${endpoint}:`, error);
      return { success: false, error: error.message };
    }
  }

  // Gestionar tokens
  setToken(token) {
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  // Verificar autenticación
  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return !!token && !!user;
  }

  // Obtener tipo de usuario
  getUserType() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user?.userType;
  }

  // Obtener datos del usuario
  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }
}

export default ApiBase;