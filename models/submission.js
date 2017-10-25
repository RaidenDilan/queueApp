const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  service: { type: String },
  category: { type: String },
  title: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Submission', submissionSchema);
