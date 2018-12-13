import { mount } from '@vue/test-utils'
import Index from '~/pages/index.vue'

describe('Index', () => {
  test('snapshot', () => {
    const index = mount(Index)
    expect(
      index.html()
    ).toMatchSnapshot()
    expect(
      index.isVueInstance()
    ).toBeTruthy()
  })
})
