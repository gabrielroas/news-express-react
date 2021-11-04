# news-express-react
This project is the foundation of a news application, it is a simple and complete application with api made in NodeJS, frontend made with ReactJS and using Postgres as a database. 

The application can be installed in a Docker environment with ease, just follow the steps below, if you prefer to work with a development environment you can install it directly following the steps at the end of this README.

## Requirements
* NodeJS version 12+
* npm or yarn package manager
* Postgres version 12.8+
* Docker & Docker Compose

## Setup
*1. Download the zip or clone the project in any folder on target machine.
 
*2. Create `.env` file inside backend folder, use as base [.env.example](.backend/env.example) file. You should configure correctly, follow the step by step inside .env-example.

*3 Access the project's root folder `news-express-react` in the terminal and with Docker and Docker-Compose installed, execute the command in the terminal:
```
docker-compose up -d --build  
or
sudo docker-compose up -d --build
```
Wait for the installation to finish. If everything goes as expected you will get three "done" messages, indicating that everything went as it should

*This will start 3 docker containers:
``postgres 12 container for database
node:12 container for backend
node:12 container fo frontend
``
*You can check the containers that are running with the following command in the terminal:
```
docker-compose ps
or
sudo docker-compose ps
```

*
  