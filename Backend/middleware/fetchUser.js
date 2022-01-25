const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
    //Get user from jwt token and add ID to the req object.
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Access Denied!, authenticate using a valid token" });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user;
        next();

    } catch (error) {
        res.status(401).send({ error: "Auth failed, check auth-token" });
    }
}

module.exports = fetchUser;