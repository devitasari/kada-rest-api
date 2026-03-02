const jwt = require('jsonwebtoken');
const secret = 'secret'

const generateToken = (payload) => {
    const token = jwt.sign(payload, secret);
    return token
}


module.exports = generateToken