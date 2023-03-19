# E-Commerce Back-End
Back end portion of an ecommerce site that uses Express.js API and use sequelize to interact with a MySQL database.

[TOC]
## Table of Contents

1. Description
2. User Story
3. Acceptance Criteria
4. Installation
5. Demo
6. Credits

## Description

This project is a back-end application for an e-commerce site that uses the command line interface (CLI) and object-relational mapping for various methods of data manipulation, storage, and retrieval when using HTTP methods with a RESTful API. The application is built using Express.js, MySQL2, and Sequelize packages, which connect an Express.js API to a MySQL database. The dotenv package is utilized to store sensitive environmental variables such as username, password, and database name.

The schema.sql file in the db folder is used to create the ecommerce_db database and establish a connection with Insomnia Core through the command line interface (CLI). Once the database is created, the specific NPM packages are installed using npm i. The npm run seed command migrates the data to MySQL. A table is created out of the four objects located in the models folder: Product, Category, Tag, ProductTag.

After installing the node.js packages and seeding the database without error, run npm start to start the server and connect to local host http://localhost:3001/. Then, an API GET request is performed for each route displaying in JSON format. All API POST, PUT, and DELETE routes are tested in Insomnia Core, and it is possible to successfully create, update, and delete data in the database.


## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies


## Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database


## Installation

To use this application, follow these steps:

Clone the repository to your local machine
Navigate to the root directory of the application in your terminal
Run npm install to install the required packages
Create an .env file and add your MySQL database name, username, and password in this format:
python
Copy code
DB_NAME='ecommerce_db'
DB_USER='your-username-here'
DB_PW='your-password-here'
Create the database by running the command mysql -u root -p < db/schema.sql in your terminal
Seed the database by running the command npm run seed
Start the server by running the command npm start


## Demo

[E-Commerce Walkthrough.webm](https://user-images.githubusercontent.com/106099150/226149096-284a0723-5a35-4530-b334-6178a815d4d2.webm)






## Credits

https://docs.insomnia.rest/insomnia/requests

https://www.digitalocean.com/community/tutorials/nodejs-express-routing

https://expressjs.com/en/guide/routing.html


