const { Kafka } = require('kafkajs');

// สร้าง Kafka instance และตั้งค่า brokers
const kafka = new Kafka({
  clientId: 'test-consumer', // ชื่อของ client
  brokers: [
    "127.0.0.1:9094",
    "127.0.0.1:9095"
  ]// brokers ที่เชื่อมต่อ
});

/* 
   * กำหนด group id สําหรับ consumer
*/
const consumer = kafka.consumer({ groupId: 'test-group', allowAutoTopicCreation: false });

const run = async () => {
  // เชื่อมต่อกับ Kafka broker
  await consumer.connect();

  // Subscribe กับ topic ที่ต้องการ consume
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  // เริ่ม consume messages
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });

};

run().catch(console.error);
