# API using MYSQL

- Mysql
- Express
- Node


## How to run

1. Open terminal
2. Execute `npm i`
3. Execute `npm run dev`

> Don't forget to create a **.env** file with the values of the variables that are in **.env.example**


## Database

> Execute the script inside db directory in your MySQL database to get initial data

## Routes
- <localhost:PORT>/ping -  to check database connection -> **GET** METHOD
- <localhost:PORT>/api/employees -  to get tasks        -> **GET** METHOD
- <localhost:PORT>/api/employees/:id -  to get 1 task   -> **GET** METHOD
- <localhost:PORT>/api/employees -  to create task      -> **POST** METHOD
- <localhost:PORT>/api/employees/:id -  to update task  -> **PATCH** METHOD
- <localhost:PORT>/api/employees/:id -  to delete task  -> **DELETE** METHOD