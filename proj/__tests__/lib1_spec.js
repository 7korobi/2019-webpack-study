import lib from '../src/js/lib1';

describe("lib1", ()=> {
  test('snapshot', ()=> {
    expect(
      lib(process)
    ).toMatchSnapshot()
  })
})

