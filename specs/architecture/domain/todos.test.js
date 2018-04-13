const { Todos } = require('../../../architecture/domain/todos');
const { Todo } = require('../../../architecture/domain/todo');
const expect = require('expect');

describe('Testing todos, the todo list', () => {
  it('should exist', () => {
    expect(Todos).toBeDefined();
  });

  it('should have an initial length of 0', () => {
    const todos = new Todos();
    expect(todos.length()).toBe(0);
  });

  it('should change length when adding new todo', () => {
    const todos = new Todos();
    todos.add(new Todo());
    expect(todos.length()).toBe(1);
  });

  it('should return element by id', () => {
    const todos = new Todos();
    const todo = new Todo();
    todos.add(todo);
    expect(todos.getById(todo._id)).toBe(todo);
  });

  it('should return element by position', () => {
    const todos = new Todos();
    const todo = new Todo();
    todos.add(todo);
    expect(todos.get(0)).toBe(todo);
  });

  it('should return null if bad index is given', () => {
    const todos = new Todos();
    expect(todos.get(0)).toBeNull();
  });

  it('should remove element by position', () => {
    const todos = new Todos();
    const todo = new Todo();
    todos.add(todo);
    todos.removeAt(0)
    expect(todos.get(0)).toBeNull();
  });

  it('should remove element by id', () => {
    const todos = new Todos();
    const todo = new Todo();
    todos.add(todo);
    todos.remove(todo.id)
    expect(todos.get(0)).toBeNull();
  });

  it('should return null if bad index is given', () => {
    const todos = new Todos();
    expect(todos.get(0)).toBeNull();
  });
});
