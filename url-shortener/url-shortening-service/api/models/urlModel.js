const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema(
    {
        original_url: {
            type: String,
            required: true
        },
        short_url: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Url', urlSchema)