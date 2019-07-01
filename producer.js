var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.KafkaClient(),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: 'SampleTopic', messages: 'hi' },
        { topic: 'SampleTopic', messages: ['hello', 'world'] }
    ];

producer.on('ready', function () {
    console.log('PRODUCER READY !!');
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});