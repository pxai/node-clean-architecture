const { TodoEntityDAO } = require('./repository/TodoEntityDAO');
const { GetTodos } = require('./architecture/usecases/getTodos');
const { GetTodo } = require('./architecture/usecases/getTodo');
const { Todos } = require('./architecture/domain/todos');



const getTodosBoundary = new GetTodos(new TodoEntityDAO());
const getTodoBoundary = new GetTodo(new TodoEntityDAO());
console.log(getTodosBoundary.get())
console.log(getTodosBoundary.get(1))
