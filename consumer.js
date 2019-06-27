const kafka =  require("kafka-node")
 
const client = new kafka.KafkaClient({
	autoConnect: false,
	kafkaHost: 'localhost:2181'
});
 
const topics = [
    {
        topic: "TutorialTopic"
    }
];
const options = {
    autoCommit: false
};

const consumers = () => {
    const consumer = new kafka.Consumer(client, topics, options);
    
    consumer.on("message", function(message) { 
        console.log(message)
    });

};

setTimeout(() => {
    consumers();
}, 1000);