# React-Classwork
# Docker

## installation

```bash

> sudo apt-get update
> sudo apt-get install ca-certificates curl
> sudo install -m 0755 -d /etc/apt/keyrings
> sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
> sudo chmod a+r /etc/apt/keyrings/docker.asc

> echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
> sudo apt-get update

> sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# add your user in docker group
> sudo usermod -aG docker $USER

# restart the machine
> sudo reboot

```

## images

```bash

# list the images
> docker image ls

# test docker by pulling hello-world image
# pull an image from docker hub
# > docker image pull hello-world
> docker image pull <image name>

# get the image details
# > docker image inspect hello-world
> docker image inspect <image name or image id>

# delete an image
# > docker image rm hello-world
> docker image rm <image name or image id>

# removing the hanging or dangling images
> docker image prune

```

## containers

```bash

# get the list of running containers
> docker container ls

# get the list of all containers (created, running, stopped)
> docker container ls -a

# create a container
> docker container create <image name or id>

# execute the created container
> docker container start <container name or id>

# stop the running container
> docker container stop <container name or id>

# run a container (create and start) in attached mode
# - container will get attached to the terminal
# - if the terminal gets closed, the container will also gets stopped
# > docker container run --name mycontainer hello-world
> docker container run --name <container name> <image name or id>

# run a container in detached mode
# - the container will run in background (continuously)
# - param -i: interact with the container
# - param -t: get the terminal of the container
# - param -d: run the container in detached mode
> docker container run -itd --name <container name> <image name or id>

# run a container in detached mode with port forwarding enabled
> docker container run -itd --name <container name> -p <native port>:<container port> <image name or id>

# run a container in detached mode with an environment variable
> docker container run -itd --name <container name> -p <native port>:<container port> -e <ENV Variable Name>=<value> <image name or id>

# run a container in detached mode with a volume attached
> docker container run -itd --name <container name> -p <native port>:<container port> -e <ENV Variable Name>=<value> -v <volume name>:<mount directory> <image name or id>

# execute a command inside the container
# > docker container exec mywebsite date
> docker container exec <container name or id> <command>

# get the terminal of the container to execute commands
> docker container exec -it <container name or id> bash

# remove the stopped (Exited) container
> docker container rm <container name or id>

# remove the running container
> docker container rm --force <container name or id>

# remove all containers at once
> docker container rm --force $(docker container ls -aq)

```

## network

## volumes

```bash

# get list of volumes
> docker volume ls

# delete hanging volumes
> docker volume prune

# create a new volume
# > docker volume create db-volume
> docker volume create <volume name>

# remove a volume
> docker volume rm <volume name>

```

# Assignments

## assignment - 1

- host a website with index.html inside docker

```bash

# pull apache image
> docker image pull httpd

# run httpd container continuously in background
> docker container run -itd --name mywebsite httpd

```

## building image commands

- create a file named Dockerfile
- use the following commands

```bash

# FROM: used to decide the base image
# COPY: used to copy file(s) from local machine to the image
# - first parameter is the file path on local machine
# - second parameter: the directory path inside the container
# EXPOSE: used to expose a port for the container
# RUN: used to execute the command while building the image
# CMD: used to execute the command while running the container
# AUTHOR: used to add author information

```

```Dockerfile
FROM httpd
COPY index.html /usr/local/apache2/htdocs
EXPOSE 80
```

- build the image

```bash

# build an image
> docker image build -t myimage .

```
