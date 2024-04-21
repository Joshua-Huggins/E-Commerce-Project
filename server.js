const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// Calls express and sets port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turns on the routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  all.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});