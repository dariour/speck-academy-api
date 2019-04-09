const hallsController = require('./controller');
const router = new express.Router();

router.route('/').get(hallsController.getHalls);

router.route('/:hallId').get(hallsController.getHallsId);

module.exports = router;