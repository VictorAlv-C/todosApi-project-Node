const { json } = require('express/lib/response');
const { Todo } = require('../models/todo.model');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'Success',
      data: { todos }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { content } = req.body;
    if (content.length === 0) {
      res.status(404).json({
        status: 'error',
        message: 'The content is empty'
      });
      return;
    }
    const todo = await Todo.create({ content });

    res.status(200).json({
      status: 'Success',
      data: todo
    });
  } catch (error) {
    console.log(error);
  }
};

exports.editTodo = async (req, res) => {
  try {
    const { content } = req.body;
    const { id } = req.params;

    if (content.length === 0) {
      res.status(404).json({
        status: 'error',
        message: 'The content is empty'
      });
      return;
    }

    const todo = await Todo.findOne({ where: { id, status: 'active' } });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update todo with given id'
      });
      return;
    }

    await todo.update({ content });

    res.status(204).json({
      status: 'Success',
      message: 'Updated successfully'
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id, status: 'active' } });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete todo with given id'
      });
      return;
    }

    await todo.update({ status: 'deleted' });

    res.status(200).json({
      status: 'Success',
      message: 'removed successfully'
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDeletedTodos = async (req, res) => {
  try {
    const todosDeleted = await Todo.findAll({ where: { status: 'deleted' } });

    res.status(200).json({
      status: 'Success',
      data: todosDeleted
    });
  } catch (error) {
    console.log(error);
  }
};

exports.reactiveTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id, status: 'deleted' } });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant reactive todo with given id'
      });
      return;
    }

    await todo.update({ status: 'active' });

    res.status(204).json({
      status: 'Success',
      message: 'Reactive successfully'
    });
  } catch (error) {
    console.log(error);
  }
};
