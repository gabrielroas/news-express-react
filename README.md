# news-express-react
This project is the foundation of a news application, it is a simple and complete application with api made in NodeJS, frontend made with ReactJS and using Postgres as a database. 

The application can be installed in a Docker environment with ease, just follow the steps below, if you prefer to work with a development environment you can install it directly following the steps at the end of this README.

![alt text](https://i.imgur.com/WrmhFhh.png)

## Requirements
* NodeJS version 12+
* npm or yarn package manager
* Postgres version 12.8+
* Docker & Docker Compose

## Setup
1. Download the zip or clone the project in any folder on target machine.
 
2. Create `.env` file inside backend folder, use as base [.env-example](backend/.env-example) file. You should configure correctly, follow the step by step inside .env-example.

3. Access the project's root folder `news-express-react` in the terminal and with Docker and Docker-Compose installed, execute the command in the terminal:
```
docker-compose up -d --build  
or
sudo docker-compose up -d --build
```
Wait for the installation to finish. If everything goes as expected you will get three "done" messages, indicating that everything went as it should

* This will start 3 docker containers:
```
postgres 12 container for database
node:12 container for backend
node:12 container fo frontend
```

* You can check the containers that are running with the following command in the terminal:
```
docker-compose ps
or
sudo docker-compose ps
```

4. Now that you have the containers installed and running you should run the database migrations to create the tables schemas. Run the following command in the terminal:
```
docker-compose exec app npx sequelize-cli db:migrate
or 
sudo docker-compose exec app npx sequelize-cli db:migrate
```
* You can kill the process of containers by clicking ctrl + c inside the terminal the containers are running. To start the containers again, put `docker-compose up --build or sudo docker-compose --build` in the terminal 

## Usage Application
.1 If you followed the step by step and you have the containers running you can access `http://localhost:3000` to access your application's frontend.
* Note that the application is completely empty, you must then create your user account in the application to be able to register new news.

.2 To create your account in the application, just access the route `http://localhost:3000/signup`, create your account and log in at `http://localhost:3000/signin`
* Remember, you are running this application in your local environment or docker, so it is completely safe for you to register with the application.
 
.3 To create a new news just go to the main page and click on Nova Notícia or access the route `http://localhost:3000/news/create`

.4 To edit or delete your news access the news page and click on button for edit or delete. It is not possible for you to delete or edit news that does not belong to you. `http://localhost:3000/news/view/your-news-title`

.5 For filter news access the home page `htt://localhost:3000/ or /home` and write by the title of the news you want to filter in the search field

## Alternative Setup - Development environment (no Docker)
* To install the application on your local machine in a development environment without using Docker, you need to have installed:
```
* NodeJS version 12+
* npm or yarn package manager
* Postgres version 12.8+
```
1. Download the zip or clone the project in any folder on target machine.
 
2. Create `.env` file inside backend folder, use as base [.env-example](backend/.env-example) file. You should configure correctly, follow the step by step inside .env-example. 
* Remembering that you must have a Postgres server installed and configured on your local machine.

3. Access the project's `frontend` folder, inside it run the following command in the terminal to install the dependencies.
```
npm install  
or
yarn add 
```
* Wait for the installation to finish. After installation you can start the frontend by running the command `npm start` or `yarn start`

4. Now access the project's `backend` folder and execute the command in the terminal for install all dependencies.
```
npm install  
or
yarn add 
```
5. After installing the backend dependencies it is necessary to run migrations to create the database schema.
```
npx sequelize-cli db:migrate
or
yarn sequelize db:migrate
```
6. Now if everything went well just run the command in the terminal to start the backend server `npm start` or `yarn start`

