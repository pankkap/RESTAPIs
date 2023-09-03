const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
    {
    title: String,
    body:String,
    oldest:Boolean,
    latest:Boolean,
    liked:Boolean,
    disliked:Boolean,
    }
)

const Note = mongoose.model('notes', noteSchema)

module.exports = Note