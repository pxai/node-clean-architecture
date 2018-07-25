const expect = require('expect');
const { RemoveTodoBoundary } = require('../../../architecture/boundaries/removeTodoBoundary')
describe('Testing for removeTodo boundary', () => {
  it('should exist removeTodo', () => {
      expect( RemoveTodoBoundary).toBeDefined();
  });

 it('should exist remove method', () => {
      const removeTodoBoundary = new RemoveTodoBoundary();
      expect( removeTodoBoundary.remove).toBeDefined();
  });

});
