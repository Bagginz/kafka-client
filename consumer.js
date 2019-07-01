const kafka =  require("kafka-node")
 
const client = new kafka.KafkaClient({
	autoConnect: false,
	kafkaHost: 'localhost:2181'
});
 
const topics = [
    {
        topic: "kafka-node-dev"
    }
];
const options = {
    autoCommit: false
};

exports.consumers = () => {
    const consumer = new kafka.Consumer(client, topics, options);
    
    consumer.on("message", function(message) { 
        console.log(message)
    });

};

setTimeout(() => {
    exports.consumers();
}, 1000);