var jwt = require('jsonwebtoken');
exports.checkToken = (req, res, next) => {
    var token1 = req.headers['token'];
    // decode token
    if (token1) {
        jwt.verify(token1, 'secreatekey', (err, decoded) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Token is not valid'
                });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        // if there is no token return an error
        return res.send({
            success: false,
            message: 'No token provided.'
        });
    }
}

