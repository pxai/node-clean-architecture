const uuid = require('./uuid');

class Todo {
  constructor (task='', date= new Date()) {
    this._id = uuid();
    this._task = task;
    this._created = new Date();
    this._completed = null;
    this._isDone = false;
  }

  get id() {
      return this._id;
  }

  get task() {
    return this._task;
  }

  set task(task) {
    this._task = task;
  }

  get created() {
    return this._created;
  }

  get completed() {
    return this._completed;
  }

  get isDone() {
    return this._isDone;
  }

  done() {
    this._completed = new Date();
    this._isDone = true;
  }

  undone() {
    this._completed = null;
    this._isDone = false;
  }

}

module.exports = { Todo };
