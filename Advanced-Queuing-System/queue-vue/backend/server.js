// server.js
const express = require('express');
const { publishMessage } = require('./backend/controller/rabbitmqPublisher');
const { consumeMessages } = require('./backend/controller/rabbitmqConsumer');

const app = express();
const PORT = process.env.PORT || 3000;

// API to publish tasks
app.post('/publish', (req, res) => {
  const task = req.body.task;
  publishMessage(task);
  res.send('Task published to the queue.');
});

// Start the RabbitMQ consumer
consumeMessages();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
