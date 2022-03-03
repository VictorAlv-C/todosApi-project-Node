const expres = require('express');
const route = expres.Router();
const {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo
} = require('../controllers/todo.controller');

route.get('/', getTodos);

route.post('/', addTodo);

route.patch('/:id', editTodo);

route.delete('/:id', deleteTodo);

module.exports = { routeTodo: route };
