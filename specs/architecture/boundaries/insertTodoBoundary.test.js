const expect = require('expect');
const { InsertTodoBoundary } = require('../../../architecture/boundaries/insertTodoBoundary')
describe('Testing for nsertTodo boundary', () => {
  it('should exist insertTodo', () => {
      expect( InsertTodoBoundary).toBeDefined();
  });

 it('should exist insert method', () => {
      const insertTodoBoundary = new InsertTodoBoundary();
      expect( insertTodoBoundary.insert).toBeDefined();
  });

});
