Node Kafka 

```bash
docker-compose up -d
```

Create topic

```bash
docker exec broker \
kafka-topics --bootstrap-server broker:9092 \
             --create \
             --topic <topic_name>
```

Quickstart

https://developer.confluent.io/quickstart/kafka-docker/
