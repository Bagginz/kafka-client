const kafka =  require("kafka-node")
 
const client = new kafka.Client("localhost:2181");
 
const topics = [
    {
        topic: "TutorialTopic"
    }
];
const options = {
    autoCommit: false
};
 
const consumer = new kafka.HighLevelConsumer(client, topics, options);
 
consumer.on("message", function(message) { 
    console.log(message)
});