const expect = require('expect');
const { TodoEntityGateway } = require('../../../architecture/gateways/TodoEntityGateway');

describe('Gateways for Todo Entity', ()=>{
  it('should exist the gateway', () => {
    expect(TodoEntityGateway).toBeDefined();
  })

})
