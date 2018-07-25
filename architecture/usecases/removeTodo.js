const { RemoveTodoBoundary } = require('../boundaries/removeTodoBoundary');

class RemoveTodo extends RemoveTodoBoundary {
  constructor(todosEntityGateway) {
    super(todosEntityGateway);
  }

  remove (id) {
    return this.todosEntityGateway.find(id);
  }
}

module.exports = { RemoveTodo }
