const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteShema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    user: { type: String }
});

module.exports = mongoose.model('Note', NoteShema);