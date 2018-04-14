const { GetTodosBoundary } = require('../boundaries/getTodosBoundary');
class GetTodos extends GetTodosBoundary {
  constructor(todosEntityGateway) {
    super();
    this.todosEntityGateway = todosEntityGateway;
  }

  get () {
    return this.todosEntityGateway.findAll();
  }
}

module.exports = { GetTodos }
