const { TodoEntityGateway } = require('../architecture/gateways/TodoEntityGateway');

const todosDB = [];

class TodoEntityDAO extends TodoEntityGateway {
  constructor () {
    super();
      this.todos = todosDB;
  }

  find(id) {
    return this.todos.filter(t => t.id === id)[0];
  }

  findAll() {
    return  this.todos;
  }

  insert(todo) {
	this.todos.push(todo);
  }

  update(todo) {}

  remove(id) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}

module.exports = { TodoEntityDAO };
