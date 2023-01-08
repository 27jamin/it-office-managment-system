//and empty contrsutor mean use the default value
//redisclient to run query to your database
//require("dotenv").config();

const Redis = require("ioredis");

const redisClient = new Redis();

module.exports = redisClient;