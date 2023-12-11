const amqp = require('amqplib');
const redis = require('redis');

const redisClient = redis.createClient();

async function consumeMessages() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'tasks';

  await channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (message) => {
    const task = message.content.toString();
    
    // Process the task (e.g., save to Redis)
    redisClient.lpush('queuedTasks', task);

    console.log(`Task processed: ${task}`);
    
    channel.ack(message);
  });

  console.log('Consumer started');
}

module.exports = { consumeMessages };
