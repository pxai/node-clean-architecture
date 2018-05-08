const expect = require('expect');
const { GetTodoBoundary } = require('../../../architecture/boundaries/getTodoBoundary')
describe('Testing for getTodo boundary', () => {
  it('should exist getTodo', () => {
      expect( GetTodoBoundary).toBeDefined();
  });

 it('should exist get method', () => {
      const getTodoBoundary = new GetTodoBoundary();
      expect( getTodoBoundary.get).toBeDefined();
  });

});
