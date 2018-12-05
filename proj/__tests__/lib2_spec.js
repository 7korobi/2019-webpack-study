import lib from '../src/js/lib2';

describe("lib2", ()=> {
  test('snapshot', ()=> {
    expect(
      lib(process)
    ).toMatchSnapshot()
  })
})

