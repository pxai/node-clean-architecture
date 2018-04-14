const expect = require('expect');
const { TodoEntityDAO } = require('../../repository/TodoEntityDAO');

describe('TodoEntityDAO', ()=> {
  it('should exist an EntityDAO', ()=> {
    expect(TodoEntityDAO).toBeDefined();
  });
});
