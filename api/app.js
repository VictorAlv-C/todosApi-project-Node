// Create server Express
const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

//Routes
const { routeTodo } = require('./routes/todo.routes');

//Database
const { sequelize } = require('./utils/database');

app.use('/api/v1/todos', routeTodo);

sequelize
  .authenticate()
  .then(() => console.log('Connected Database'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('Successful Sync'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('Server runing');
});
