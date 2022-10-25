# react_trial_app
trying out react, using different usecases

## Installation
Node package manager is required.

### Backend

Enter backend folder to run.

```bash
cd backend
npm install
```

### Frontend

Enter frontend folder to run.

```bash
cd frontend
npm install
```

## Start app
### Backend

Make sure to have Mysql as a db.
create a .env file, copy and fill-up the syntax below.

```bash
DB_NAME=
DB_USER=
DB_PASS=

ACCESS_TOKEN_SECRET = 
REFRESH_TOKEN_SECRET = 
```

then run:
```bash
npm start index.js
or
nodemon
```

### Frontend

run
```bash
npm start
```

## Tech being used
### Backend
- Nodejs
- Expressjs
- Jsonwebtoken
- Mysql
- Sequelize
### Frontend
- React typescript
- Axios
- Bulma
- FontAwesome
