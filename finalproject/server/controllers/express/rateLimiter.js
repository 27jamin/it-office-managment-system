//multi let as do multiple command and query at the same time

const redisClient = require("../../redis");

const rateLimiter = (secondLimit , limitAmount) => async (req, res, next) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    [ response ] = await redisClient.multi().incr(ip).expire(ip, secondLimit).exec();

    if(response[1] > limitAmount)
        res.json({ loggedIn : false, status : "slow down" });
    else next();
};

module.exports = rateLimiter;