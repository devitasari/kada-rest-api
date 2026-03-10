const amqp = require('amqplib');

let channel;

async function connectRabbitMQ() {
  try {
    const conn = await amqp.connect("amqp://rabbitmq")
    console.log("RabbitMQ connected")
    return conn
  } catch (err) {
    console.log("RabbitMQ not ready, retrying in 5 seconds...")
    setTimeout(connectRabbitMQ, 5000)
  }
}

function getChannel() {
  return channel;
}

module.exports = { connectRabbitMQ, getChannel };