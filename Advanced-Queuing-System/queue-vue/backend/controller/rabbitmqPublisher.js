
const amqp = require('amqplib');

async function publishMessage(message) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'tasks';

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(message), { persistent: true });

  console.log(`Message sent: ${message}`);

  setTimeout(() => {
    connection.close();
  }, 500);
}

module.exports = { publishMessage };
