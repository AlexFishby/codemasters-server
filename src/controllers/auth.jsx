const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'pass') {
        const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Login fallido');
    }
};
