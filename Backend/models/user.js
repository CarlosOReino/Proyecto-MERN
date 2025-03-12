import connection from '../config/mysql.js';
// Clase para el modelo de usuario
class User {
  static create(username, email, password, callback) {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, password], callback);
  }

  // Método para buscar un usuario por su email
  static findByEmail(email, callback) {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], callback);
  }

    // Método para buscar un usuario por ID
    static findById(id, callback) {
      const query = 'SELECT * FROM users WHERE id = ?';
      connection.query(query, [id], callback);
    }
  
}



export default User;