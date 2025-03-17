# 🎵 Aplicación Web - Stack MERN

## 📌 Descripción
Esta aplicación web ha sido desarrollada utilizando el stack MERN (MongoDB, Express, React, Node.js). Permite a los usuarios registrarse, iniciar sesión, ver y actualizar su perfil, así como gestionar canciones y listas de reproducción.

---

## 🚀 Tecnologías y Dependencias

### Backend
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar canciones y álbumes.
- **MySQL**: Base de datos relacional utilizada para almacenar usuarios y listas de reproducción.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB.
- **mysql2**: Cliente para conectarse a MySQL.
- **bcryptjs**: Biblioteca para encriptar contraseñas.
- **jsonwebtoken**: Biblioteca para generar y verificar tokens JWT.
- **dotenv**: Biblioteca para gestionar variables de entorno.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **swagger-jsdoc** y **swagger-ui-express**: Herramientas para documentar la API.

### Frontend
- **React**: Biblioteca para construir interfaces de usuario.
- **React Router**: Biblioteca para manejar el enrutamiento en la aplicación.
- **Bootstrap**: Framework CSS para estilos y componentes.
- **react-bootstrap**: Componentes de Bootstrap para React.


---

## 📌 Endpoints de la API
### 🔹 Autenticación
- `POST /api/auth/register`: Registro de usuario.
- `POST /api/auth/login`: Inicio de sesión.

### 🔹 Usuarios
- `GET /api/users/:id`: Obtener información del usuario.
- `PUT /api/users/:id`: Actualizar perfil del usuario.

### 🔹 Canciones y Listas de Reproducción
- `POST /api/songs`: Agregar una nueva canción.
- `GET /api/songs`: Obtener todas las canciones.
- `POST /api/playlists`: Crear una lista de reproducción.
- `GET /api/playlists`: Obtener todas las listas de reproducción.

📜 **Documentación completa de la API disponible en Swagger: `http://localhost:5000/api-docs`**

---

🌟 ¡Si te gusta este proyecto, no olvides darle una estrella en GitHub! 🚀

