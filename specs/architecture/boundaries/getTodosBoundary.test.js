const expect = require('expect');
const { GetTodosBoundary } = require('../../../architecture/boundaries/getTodosBoundary')
describe('Testing for readTodo boundary', () => {
  it('should exist getTodos', () => {
      expect( GetTodosBoundary).toBeDefined();
  });
});
