import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import IndexPage from '~/pages/index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('pages/index.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = null
    wrapper = mount(IndexPage, {
      localVue
    })
  })

  test('snapshot', () => {
    expect(
      wrapper.html()
    ).toMatchSnapshot()
  })
})

require('jsdom-global')()
