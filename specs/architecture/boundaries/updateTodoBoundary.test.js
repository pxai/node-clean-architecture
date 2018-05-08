const expect = require('expect');
const { UpdateTodoBoundary } = require('../../../architecture/boundaries/updateTodoBoundary')
describe('Testing for nsertTodo boundary', () => {
  it('should exist updateTodo', () => {
      expect( UpdateTodoBoundary).toBeDefined();
  });

 it('should exist update method', () => {
      const updateTodoBoundary = new UpdateTodoBoundary();
      expect( updateTodoBoundary.update).toBeDefined();
  });

});
