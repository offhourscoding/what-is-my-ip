# What Is My IP

NodeJS application that displays client's public IP address

## Prerequisites

```
NodeJS + NPM
Docker
```

# Setup


## Development
```
npm install
npm run dev
```

## Production
```
docker load -i what-is-my-ip_docker.tar
docker run -d -e NODE_ENV='production' -p 9002:9002 -v <LOCAL LOG LOCATION>:/usr/src/app/logs --name what-is-my-ip what-is-my-ip:latest
```

# NPM Run Scripts
Script | Description
--- | ---
dev | Runs application in nodemon
build | Creates docker image
docker-start | Build docker image and start container locally
dist | Create distribution docker tar file
cleanup | Remove development files
