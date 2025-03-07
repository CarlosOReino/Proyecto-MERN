// Registrar un nuevo usuario
export const register = async (username, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const data = await response.json();
      console.log('Registration successful:', data);
  
      // Almacenar el token en localStorage
      localStorage.setItem('token', data.token);
      return data.token;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };
  
  // Iniciar sesión
  export const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
  
      // Almacenar el token en localStorage
      localStorage.setItem('token', data.token);
      return data.token;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };