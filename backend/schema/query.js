const mongoose = require('mongoose');

const QuerySchema = mongoose.Schema({
    query: {
        type: String,
    },
    name: {
        type: String,
    },
});

module.exports = mongoose.model('Query', QuerySchema);
