const express = require('express');
const bodyParser = require('body-parser');
const {
  usersHandler,
  hallsHandler,
} = require('./route-handlers');

const router = new express.Router();

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Base routes
router.use('/users', usersHandler);
router.use('/halls', hallsHandler);

// Test route
router.get('/', (req, res) => {
  res.send('ok');
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));