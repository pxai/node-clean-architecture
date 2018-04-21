const { GetTodoBoundary } = require('../boundaries/getTodoBoundary');

class GetTodo extends GetTodoBoundary {
  constructor(todosEntityGateway) {
    super(todosEntityGateway);
  }

  get (id) {
    return this.todosEntityGateway.find(id);
  }
}

module.exports = { GetTodo }
