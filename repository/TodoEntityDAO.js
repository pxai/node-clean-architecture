const { TodoEntityGateway } = require('../architecture/gateways/TodoEntityGateway');

const todosDB = [];

class TodoEntityDAO extends TodoEntityGateway {
  constructor () {
    super();
      this.todos = todosDB;
  }

  find(id) {}

  findAll() {
    return  this.todos;
  }

  insert(todo) {}

  update(todo) {}

  remove(id) {}
}

module.exports = { TodoEntityDAO };
