const express = require('express');
const bodyParser = require('body-parser');
const {
  usersHandler,
  hallsHandler,
} = require('./route-handlers');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Test route
app.get('/', (req, res, next) => res.send('ok'));

// User routes
app.get('/users', usersHandler.getUsers);
app.get('/users/:userId', usersHandler.getUsersId);

// Hall routes
app.get('/halls', hallsHandler.getHalls);
app.get('/halls/:hallId', hallsHandler.getHallsId);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));