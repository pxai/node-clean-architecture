const expect = require('expect');
const { GetTodosBoundary } = require('../../../architecture/boundaries/getTodosBoundary')
describe('Testing for readTodo boundary', () => {
  it('should exist getTodos', () => {
      expect( GetTodosBoundary).toBeDefined();
  });
  
  it('should exist get method', () => {
	  const getTodosBoundary = new GetTodosBoundary();
      expect( getTodosBoundary.get).toBeDefined();
  });
});
