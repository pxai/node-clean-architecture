const { TodoEntityDAO } = require('./repository/TodoEntityDAO');
const { GetTodos } = require('./architecture/usecases/getTodos');
const { Todos } = require('./architecture/domain/todos');


const getTodosBoundary = new GetTodos(new TodoEntityDAO());

console.log(getTodosBoundary.get())
