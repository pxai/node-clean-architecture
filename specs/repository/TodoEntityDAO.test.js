const expect = require('expect');
const { TodoEntityDAO } = require('../../repository/TodoEntityDAO');
let todoEntityDAO;

describe('TodoEntityDAO', ()=> {
  beforeEach('init DAO', () => {
		todoEntityDAO = new TodoEntityDAO();
	});

  it('should exist an EntityDAO', ()=> {
    expect(TodoEntityDAO).toBeDefined();
  });

  it('should get empty results with non-existant id', () => {
	expect(todoEntityDAO.get().lenght).toBe(0);
  });
});
