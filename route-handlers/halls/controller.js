const db = require('../../db/connect');

// Route /halls
const getHalls = (req, res, next) => {
  const queryClient = db.getClient();
  queryClient.query('SELECT * FROM reservation_halls', (err, result) => {
    if (err) {
      return next(err);
    };
    res.send(result.rows);
  });
}

// Route /halls/:hallId
const getHallsId = (req, res, next) => {
  const hallId = req.params.hallId;
  db.query('SELECT * FROM reservation_halls WHERE id = $1', [hallId], (err, result) => {
    if (err) {
      return next(err);
    };
    res.send(result.rows);
  });
}

module.exports = {
  getHalls,
  getHallsId,
};
