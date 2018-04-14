const expect = require('expect')
const { GetTodos } = require('../../../architecture/usecases/getTodos');

describe('GetTodos use case', () => {
  it('should exist', () => {
    expect(GetTodos).toBeDefined();
  });

  it('should implement methods', () => {
    const getTodos = new GetTodos();
    expect(getTodos.get).toBeDefined();
  })
});
