const { TodoEntityDAO } = require('./repository/TodoEntityDAO');
const { GetTodos } = require('./architecture/usecases/getTodos');
const { GetTodo } = require('./architecture/usecases/getTodo');
const { InsertTodo } = require('./architecture/usecases/insertTodo');
const { Todo } = require('./architecture/domain/todo');



const getTodosBoundary = new GetTodos(new TodoEntityDAO());
const getTodoBoundary = new GetTodo(new TodoEntityDAO());
const insertTodoBoundary = new InsertTodo(new TodoEntityDAO());
console.log(getTodosBoundary.get())
console.log(getTodosBoundary.get(1))
insertTodoBoundary.insert(new Todo('Build a clean arch') );
insertTodoBoundary.insert(new Todo('Take over the World') );

console.log(getTodosBoundary.get())
