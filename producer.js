const kafka =  require("kafka-node")
const client = new kafka.KafkaClient({
	autoConnect: false,
	kafkaHost: 'localhost:2181'
});

exports.producers = () => {
    const Producer = kafka.Producer
    const producer = new Producer(client);
    const sentMessage = JSON.stringify("Hello Bagginz");
    producer.on('ready', function () {
        console.log('Producer is ready');
        send(sentMessage);
    });
};

function send(sentMessage) {
    payloads = [
        { topic: "TutorialTopic", messages:sentMessage , partition: 0 }
    ];
    producer.send(payloads, function (err, data) {
       console.log("send data ",sentMessage);
    });
}

setTimeout(() => {
    exports.producers();
}, 5000);