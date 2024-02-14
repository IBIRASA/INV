const mongoose = require('mongoose');

const financeManagerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true
    },
    
});

const FinanceManager = mongoose.model('FinanceManager', financeManagerSchema);

module.exports = FinanceManager;
