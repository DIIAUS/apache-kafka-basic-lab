# Apache kafka lab

 ## Instructions
 * Install 
	 * **2 broker**, 
	 * **2 zookeper**	
	 * **1 ui for apache kafka**
	
## TOPICS
#### Create Topics
``` 
docker exec -it kafka1 bash 
```

```
kafka-topics.sh --create --bootstrap-server <BROKER_URL> --replication-factor <REPLICATION_FACTOR> --partitions <PARTITIONS> --topic <TOPIC_NAME> 
```

#### Verify Topic Creation

After creating the topic, you can verify it with the `--list` option:
```
kafka-topics.sh --list --bootstrap-server kafka1:9092
``` 

You should see `my-topic` in the list of topics.

#### **Optional: Describe the Topic**

To see detailed information about the topic, use the `--describe` option:
```
kafka-topics.sh --describe --bootstrap-server kafka1:9092 --topic <TOPIC_NAME>
```


## Producers

### Send Messages 
#### 1. **Access the Kafka Container**

If Kafka is running in Docker, first log in to the Kafka container:


```
docker exec -it kafka1 bash
``` 

----------

#### 2. **Run the Kafka Console Producer**

Use the `kafka-console-producer.sh` command to send messages to a topic.

##### Basic Syntax:

```
kafka-console-producer.sh --broker-list <BROKER_URL> --topic <TOPIC_NAME>
``` 

##### Example:

To send messages to a topic named `my-topic` via `kafka1:9092`:


```
kafka-console-producer.sh --broker-list kafka1:9092 --topic <TOPIC_NAME>
``` 

----------

#### 3. **Enter Messages**

After running the command, you’ll see a prompt where you can type messages. Each line you type will be sent as a separate message to the topic. For example:


```
> Hello, Kafka!
> This is my first message.
> Another message here.
> ...I
``` 

Press **Enter** after each message to send it.

----------

#### 4. **Verify the Messages**

You can consume the messages to verify they were sent successfully. Use the `kafka-console-consumer.sh` tool:

```
kafka-console-consumer.sh --bootstrap-server kafka1:9092 --topic <TOPIC_NAME> --from-beginning
``` 

This will display all the messages in the topic, starting from the first one.

----------

#### Optional: Keyed Messages

If your topic supports keys, you can send key-value messages using the `--property` flag:

```
kafka-console-producer.sh --broker-list kafka1:9092 --topic <TOPIC_NAME> --property parse.key=true --property key.separator=:
```

Then, enter key-value messages like this:

```
key1:message1
key2:message2
```
## Consumers

### Receive Messages 

#### Terminal Access
```
docker exec -it <kafka_container_name> /opt/bitnami/kafka/bin/kafka-console-consumer.sh \
  --bootstrap-server <BROKER_HOST>:<BROKER_PORT> \
  --topic <TOPIC_NAME> \
  --consumer-property group.id=<GROUP_ID> \
  --consumer-property client.id=<CONSUMER_ID> \
  --from-beginning


```