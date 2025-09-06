const mongoose = require('mongoose');



const alertSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  audioFileName: {
    type: String,
    required: true
  },
  audioFilePath: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  address: String,
  geminiResponse: String,
  riskLevel: String,
  confidence: Number,
  description: String,
  status: {
    type: String,
    default: 'active'
  },
  notificationsSent: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Alert = mongoose.model('Alert', alertSchema);
module.exports = Alert;