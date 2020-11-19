<h3 align="center">
  <img src='https://user-images.githubusercontent.com/25598040/99703580-0860c800-2a76-11eb-9c4d-e58bfa026ff9.png'>
</h3>

<p align='center'>
    <img src="https://img.shields.io/badge/Backend-Node.js-green?style=flat-square&link=https://nodejs.org/">
    <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&link=https://reactjs.org/">
    <img src="https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat-square&link=https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/Lucas-social-green?logo=linkedin&style=social&link=https://www.linkedin.com/in/lucas-rodrigues-985918197/">
</p>

## 🔍 About

<p align='center'>
    <img src='https://user-images.githubusercontent.com/25598040/99694034-be261980-2a6a-11eb-877c-4ad32fad7623.png'>
</p>

GoFinances is an web application made to control the user's income and outcome financial transactions. The user is able to create new transactions from the application as well as importing then from CSV files. The application uses an authentication system with JWT tokens to keep data restricted to each user.

Both backend and frontend where made using [Typescript](https://www.typescriptlang.org/) language. The backend is a REST API, programmed with SOLID principles in mind and taking advantage of unit tests for each use case of the application, connected to a postgres database. The frontend is an web application made with React following the "mobile first" principle, being responsive to any device resolution.

GoFinances is part of the GoStack Bootcamp Challanges by Rocketseat. 

## 👀 Demo

<p align='center'>
    <img src='https://user-images.githubusercontent.com/25598040/99688639-cd09cd80-2a64-11eb-8d5b-0ff142c8c32b.gif'>
    <img src='https://user-images.githubusercontent.com/25598040/99690713-325ebe00-2a67-11eb-9089-dde88afdf78d.gif'>
    <img src='https://user-images.githubusercontent.com/25598040/99691439-0132bd80-2a68-11eb-9302-6ac0ed58373e.gif'>
</p>

## 🔧 Made With

### Backend

- [Node](https://nodejs.org/en/)
- [PostgresSQL](https://www.postgresql.org/)
- [Express](https://www.npmjs.com/package/express)
- [TypeORM](https://typeorm.io)
- [Jest](https://www.npmjs.com/package/jest)
- [Bcrypt JS](https://www.npmjs.com/package/bcrypt)
- [JSON Web token](https://www.npmjs.com/package/jsonwebtoken)
- [Express File Upload](https://www.npmjs.com/package/express-fileupload)
- [CSV To JSON](https://www.npmjs.com/package/csvtojson)

### Frontend

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Polished](https://www.npmjs.com/package/polished)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [React Drop Zone](https://www.npmjs.com/package/react-drop-zone)
- [React Icons](https://www.npmjs.com/package/react-icons)

## 🔌 Installation

Clone the repository to your machine:

`git clone https://github.com/marmitoTH/gofinances.git`

### Backend

The backend will expect you to have a postgres database running on your machine, you can change the database credentials in `ormconfig.json` file.

```
yarn install                    # Install all dependencies
yarn typeorm migration:run      # Create the necessary tables
yarn start                      # Start the server
yarn test                       # Run test suites
```

The server will be listening the port `3333`.

### Frontend

```
yarn install        # Install all dependencies
yarn start          # Start the application
```

## 🚩 Routes

### Users

```
POST /users

{
	"name": "Your Name",
	"email": "your_email@mail.com",
	"password": "your_password"
}
```

### Sessions

```
POST /sessions

{
	"email": "your_email@mail.com",
	"password": "your_password"
}
```

### Transactions

```
GET /transactions
```

```
GET /transactions/take/1/skip/0         # Pagination
```

```
POST /transactions

{
	"title": "New Transaction",
	"value": 12000,
	"type": "income" | "outcome",
	"category": "New or existing category"
}
```

```
POST /transactions/import       # CSV file must be sent via multipart form
```

```
DELETE /transactions/:id
```