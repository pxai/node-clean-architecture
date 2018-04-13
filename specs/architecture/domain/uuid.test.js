const uuid  = require('../../../architecture/domain/uuid');
const expect = require('expect');

describe('Simple uuid generator', () => {
  it('shoud generate correct uuid', () => {
    expect(uuid()).toMatch(/[a-z0-9]{21}/);
  });
});
