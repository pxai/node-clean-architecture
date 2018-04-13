const expect = require('expect');
const { getTodos } = require('../../../architecture/boundaries/getTodos')
describe('Testing for readTodo boundary', () => {
  it('should exist getTodos', () => {
      expect(getTodos).toBeDefined();
  });
});
