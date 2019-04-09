const db = require('../db/connect');

// Route /users
const getUsers = (req, res, next) => {
  db.query('SELECT * FROM reservation_user', (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
}

// Route /users/:userId
const getUsersId = (req, res, next) => {
  const userId = req.params.userId;
  db.query('SELECT * FROM reservation_user WHERE id = $1', [userId], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
}

module.exports = {
  getUsers,
  getUsersId,
}