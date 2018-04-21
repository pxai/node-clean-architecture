const { GetTodosBoundary } = require('../boundaries/getTodosBoundary');

class GetTodo extends GetTodosBoundary {
  constructor(todosEntityGateway) {
    super(todosEntityGateway);
  }

  get (id) {
    return this.todosEntityGateway.find(id);
  }
}

module.exports = { GetTodo }
