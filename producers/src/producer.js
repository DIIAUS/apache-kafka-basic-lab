const { Kafka } = require('kafkajs');

// สร้าง Kafka client
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['127.0.0.1:9094']
});

// สร้าง producer
const producer = kafka.producer({
  allowAutoTopicCreation: false, // ไม่สร้าง topic อัตโนมัติ
  maxInFlightRequests: 5, // จำนวนคำขอพร้อมกันสูงสุด
  idempotent: true, // ป้องกันการส่งข้อความซ้ำ (enable exactly-once)
  batch: {
    size: 1024 * 1024, // 1 MB (batch size)
    maxWaitTimeInMs: 100, // รอสูงสุด 100 ms ก่อนส่ง batch
  },
  axRetryTime: 30000, // Retry สูงสุด 30 วินาที
});

const runProducer = async () => {
  await producer.connect();
  console.log('Producer connected');

  // ส่งข้อความพร้อมการตั้งค่า batch และ timeout
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Message 1' },
      { value: 'Message 2' }
    ],
    acks: -1, // รับรองว่าข้อความถูกส่งถึง broker ทุก node
    timeout: 5000, // timeout 5 วินาที
  });

  console.log('Messages sent with batch and timeout settings');
  await producer.disconnect();
};

runProducer().catch(console.error);
