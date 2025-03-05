import connection from '../config/mysql';

class Playlist {
  static create(userId, name, callback) {
    const query = 'INSERT INTO playlists (userId, name) VALUES (?, ?)';
    connection.query(query, [userId, name], callback);
  }

  static findByUser(userId, callback) {
    const query = 'SELECT * FROM playlists WHERE userId = ?';
    connection.query(query, [userId], callback);
  }
}

module.exports = Playlist;