// api/models/vocabModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VocabSchema = new Schema({
    english: {
        type: String,
        required: "English word is required"
    },
    german: {
        type: String,
        required: "German translation is required"
    },
    french:{
        type: String,
        required: "french translation is required"
    }
}, { collection: 'vocab3' });

module.exports = mongoose.model('Vocab', VocabSchema);
