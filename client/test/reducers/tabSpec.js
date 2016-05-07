import { expect } from 'chai'
import { spy } from 'sinon'
import reducer from '../../reducers/tab'
import initialState from '../../store/initialState'

describe('Client: reducers/table.jsx', function () {
  it('function reducer should exist', function () {
    expect(reducer).to.exist;
  });

  it('function reducer should create a state and return it if none exists', function () {
    expect(reducer(undefined, {type:""})).to.deep.equal(initialState)
  });
});
