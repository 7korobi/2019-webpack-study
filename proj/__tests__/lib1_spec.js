// テスト対象をimportする。
import lib from '../src/js/lib1';

// describe は、個々のtestを取りまとめるために使う。
describe("lib1", ()=> {
  // testにはそれぞれタイトルとシナリオfunctionを渡す。シナリオは非同期実行される。
  test('snapshot', ()=> {
    expect(
      lib(process)
    ).toMatchSnapshot()
  })
})

