import Index from '~/pages/index.vue'
import { mount } from '@vue/test-utils'

describe('Index', () => {
  test('snapshot', () => {
    const index = mount(Index)
    expect(index.isVueInstance()).toBeTruthy()
  })
})
