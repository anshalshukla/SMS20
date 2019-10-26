const mongoose = require('mongoose');

const marketSchema = new mongoose.Model({
    name: {
        type: String,
        required: true
    },
    exchangeRate: {
        type: Number,
        default: 0.01
    },
    priceRateChangeFactor: {
        type: Number,
        default: 0.01
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Market = mongoose.model('Market', marketSchema);

module.exports = Market;