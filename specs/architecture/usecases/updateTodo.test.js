const expect = require('expect')
const { UpdateTodo } = require('../../../architecture/usecases/updateTodo');

describe('UpdateTodo use case', () => {
  it('should exist', () => {
    expect(UpdateTodo).toBeDefined();
  });

  it('should implement method', () => {
    const updateTodo = new UpdateTodo();
    expect(updateTodo.update).toBeDefined();
  })
});
