const expect = require('expect')
const { GetTodo } = require('../../../architecture/usecases/getTodo');

describe('GetTodo use case', () => {
  it('should exist', () => {
    expect(GetTodo).toBeDefined();
  });

  it('should implement method', () => {
    const getTodo = new GetTodo();
    expect(getTodo.get).toBeDefined();
  })
});
