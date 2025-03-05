import connection from '../config/mysql.js';

class User {
  static create(username, email, password, callback) {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, password], callback);
  }

  static findByEmail(email, callback) {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], callback);
  }
}

export default User;