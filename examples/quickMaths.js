const Decimal = require('decimal');

const addWithoutDecimal = (a, b) => a+b;
const addWithDecimal = (a, b) => new Decimal(a).add(b).toNumber();

module.exports = { addWithoutDecimal, addWithDecimal };