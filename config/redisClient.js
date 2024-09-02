require('dotenv').config(); 
const redis = require('redis');

const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Connect to Redis
redisClient.connect();

module.exports = redisClient;


redisClient.ping((err, result) => {
  if (err) {
    console.error('Redis ping error:', err);
  } else {
    console.log('Redis ping result:', result); // Should print "PONG" if the connection is successful
  }
});