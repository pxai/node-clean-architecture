const { TodoEntityGateway } = require('../architecture/gateways/TodoEntityGateway');

const todosDB = [];

class TodoEntityDAO extends TodoEntityGateway {
  constructor () {
    super();
      this.todos = todosDB;
  }

  find(id) {
    return this.todos.find(t => t.id === id);
  }

  findAll() {
    return  this.todos;
  }

  insert(todo) {
    this.todos.push(todo);
  }

  update(todo) {
    this.remove(todo.id);
    this.todos.push(todo);
  }

  remove(id) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}

module.exports = { TodoEntityDAO };
