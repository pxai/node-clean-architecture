const { GetTodosBoundary } = require('../boundaries/getTodosBoundary');

class GetTodos extends GetTodosBoundary {
  constructor(todosEntityGateway) {
    super(todosEntityGateway);
  }

  get () {
    return this.todosEntityGateway.findAll();
  }
}

module.exports = { GetTodos }
