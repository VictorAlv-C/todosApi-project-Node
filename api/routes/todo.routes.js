const expres = require('express');
const route = expres.Router();
const {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
  getDeletedTodos,
  reactiveTodo
} = require('../controllers/todo.controller');

route.get('/', getTodos);

route.post('/', addTodo);

route.patch('/:id', editTodo);

route.delete('/:id', deleteTodo);

route.get('/deleted', getDeletedTodos);

route.patch('/deleted/:id', reactiveTodo);

module.exports = { routeTodo: route };
