const router = require('express').Router();
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const submissions = require('../controllers/submissions');
const secureRoute = require('../lib/secureRoute');

router.route('/submissions')
  .all(secureRoute)
  .get(submissions.index)
  .post(submissions.create);

router.route('/submissions/:id')
  .all(secureRoute)
  .get(submissions.show);

router.route('/users')
  .all(secureRoute)
  .get(users.index);

router.route('/users/:id')
  .all(secureRoute)
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
