const Submission = require('../models/submission');

function indexSubmission(req, res, next) {
  Submission
    .find()
    .exec()
    .then((submissions) => res.json(submissions))
    .catch(next);
}

function createSubmission(req, res, next) {
  Submission
    .create(req.body)
    .then((submission) => res.status(201).json(submission))
    .catch(next);
}

function showSubmission(req, res, next) {
  Submission
    .findById(req.params.id)
    .exec()
    .then((submission) => {
      if(!submission) return res.notFound();

      res.json(submission);
    })
    .catch(next);
}

module.exports = {
  index: indexSubmission,
  create: createSubmission,
  show: showSubmission
};
