import lib1 from '../src/js/lib1';

describe("lib1", ()=> {
  test('snapshot', ()=> {
    expect(lib1).toMatchSnapshot()
  })
})

