# CRUD App with React Frontend and Laravel API

This application allows the user to create, delete and edit entries in project and employee tables. Each employee can be assigned to a project.

## Requirements

- Node Package Manager
- Composer dependency manager
- MySQL Database
- PHP Interpreter

## How to Install

- Clone the [backend](https://github.com/Ignas-Vaitkus/spa-with-react-laravel-backend) and [frontend](https://github.com/Ignas-Vaitkus/spa-with-react-laravel-frontend) repositories
- Run `spa-with-react-laravel-backend/database_init.sql` script on MySQL workbench to initialize the database and user. NOTE: There there are two DROP commands in the script! Check to see if it will not affect your existing databases or users.
- Run the following commands in the root backend folder:

```
composer install
php artisan migrate:fresh --seed
```

- Run the following command in the root frontend folder.

```
npm install
```

## How to start

- Run the following command in the backend root folder

```
php artisan serve
```

The API server must run on port 8000 for the api to work.

- Run the following command in the frontend root folder

```
npm start
```
