const { UpdateTodoBoundary } = require('../boundaries/updateTodoBoundary');

class UpdateTodo extends UpdateTodoBoundary {
  constructor(todosEntityGateway) {
    super(todosEntityGateway);
  }

  update (todo) {
    return this.todosEntityGateway.update(todo);
  }
}

module.exports = { UpdateTodo }
