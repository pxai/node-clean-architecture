const expect = require('expect')
const { InsertTodo } = require('../../../architecture/usecases/insertTodo');

describe('InsertTodo use case', () => {
  it('should exist', () => {
    expect(InsertTodo).toBeDefined();
  });

  it('should implement method', () => {
    const insertTodo = new InsertTodo();
    expect(insertTodo.insert).toBeDefined();
  })
});
