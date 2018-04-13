
class Todos {
  constructor () {
    this._todos = [];
  }

  length () {
    return this._todos.length;
  }

  add (todo) {
    this._todos.push(todo);
  }
  getAll () {
    return this._todos;
  }

  get (index) {
    if (index < 0 || index > this._todos.length-1) return null;
    return this._todos[index];
  }

  getById (id) {
    return this._todos.filter( t => t.id === id)[0];
  }

  remove (id) {
    this._todos = this._todos.filter( t => t.id !== id);
  }

  removeAt (index) {
    if (index < 0 || index > this._todos.length-1) return null;
    this._todos.splice(index, 1);
  }
}

module.exports = {Todos}
