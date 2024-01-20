const mongoose = require('mongoose');

const QuerySchema = mongoose.Schema({
    email : {
        required : true
    },
    query : {
        required : true
    }
});

module.exports = mongoose.model('Query', QuerySchema);
