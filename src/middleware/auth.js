const jwt = require('jsonwebtoken');
const config = require('../config');

function autMiddleware(req, res, next){
    const token = req.headers['authorization']

    if(!token){
        return res.status(401).json({ message: 'Autorização negada' });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).json({ message: 'Chave negada' });
        }

        req.session = decoded

        next()
    })
}

module.exports = autMiddleware;