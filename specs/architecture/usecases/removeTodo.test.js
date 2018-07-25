const expect = require('expect')
const { RemoveTodo } = require('../../../architecture/usecases/removeTodo');

describe('RemoveTodo use case', () => {
  it('should exist', () => {
    expect(RemoveTodo).toBeDefined();
  });

  it('should implement method', () => {
    const removeTodo = new RemoveTodo();
    expect(removeTodo.remove).toBeDefined();
  })
});
