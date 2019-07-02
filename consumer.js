var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(z),
    consumer = new Consumer(
        client,
        [
            { topic: 'SampleTopic'}
        ],
        {
            autoCommit: false,
            autoCommitIntervalMs: 5000
        }
    );

    consumer.on('message', function (message) {
        console.log(message);
    });