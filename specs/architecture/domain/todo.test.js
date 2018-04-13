const expect = require('expect');
const {Todo} = require('../../../architecture/domain/todo.js');

describe('Domain', ()=> {
  it ('should exist a todo class', () => {
    expect(Todo).toBeDefined();
  });

  it ('should have a constructor todo class', () => {
    const todo = new Todo('Try this');
    expect(todo).toBeInstanceOf(Todo);
    expect(todo.id).toMatch(/[a-z0-9]{21}/);
    expect(todo.task).toBe('Try this');
    expect(todo.isDone).toBe(false);
    expect(todo.created).toBeInstanceOf(Date);
  });

  it ('should have proper getters/setters', () => {
    const todo = new Todo('Try this');
    todo.task = 'Changed';
    todo.done();
    expect(todo.id).toMatch(/[a-z0-9]{21}/);
    expect(todo.task).toBe('Changed');
    expect(todo.isDone).toBe(true);
    expect(todo.created.getTime()).toBeLessThanOrEqual(new Date().getTime());
  });

  it('should have a completed value when marked as done', () => {
    const todo = new Todo('Try this');
    todo.done();
    expect(todo.isDone).toBe(true);
    expect(todo.completed).not.toBe(null);
    expect(todo.completed.getTime()).toBeLessThanOrEqual(todo.created.getTime());
  });

  it('should have a completed value when marked as undone', () => {
    const todo = new Todo('Try this');
    todo.undone();
    expect(todo.isDone).toBe(false);
    expect(todo.completed).toBe(null);
  });
});
