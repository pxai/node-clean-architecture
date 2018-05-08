const { InsertTodoBoundary } = require('../boundaries/insertTodoBoundary');

class InsertTodo extends InsertTodoBoundary {
  constructor(todosEntityGateway) {
    super(todosEntityGateway);
  }

  insert (todo) {
    return this.todosEntityGateway.insert(todo);
  }
}

module.exports = { InsertTodo }
