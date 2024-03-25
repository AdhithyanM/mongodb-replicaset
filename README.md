# MongoDB Replica Set Docker Configuration

This README outlines the setup for a MongoDB replica set using Docker containers for development environments.

## Docker Compose Setup

The `docker-compose.yml` includes three services:

- `mongo_primary`: The primary MongoDB node.
- `mongo_secondary-1` and `mongo_secondary-2`: The secondary MongoDB nodes.

Each service is configured with unique ports and volumes for data persistence. They are all part of the `mongo_replica` network, facilitating internal communication.

## Connecting to the Replica Set

To connect to the replica set with MongoDB Compass, use the following URI:

```
mongodb://mongo_primary:2717,mongo_secondary-1:2727,mongo_secondary-2:2737/?replicaSet=rs0
```

### DNS Resolution Workaround

Modify your `/etc/hosts` file to include:

```
127.0.0.1 mongo_primary
127.0.0.1 mongo_secondary-1
127.0.0.1 mongo_secondary-2
```

This directs connections from MongoDB Compass on your host machine to the Docker containers.

## Initialization Script

A `setup-rs` service uses `setup.sh` to configure the replica set with `replicaSet.js`.

## Troubleshooting

If you encounter connection issues, ensure that the Docker services are up and that the `/etc/hosts` file contains the correct mappings.
