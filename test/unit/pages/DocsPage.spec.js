import { shallowMount } from '@vue/test-utils'
import DocsPage from '@/pages/docs/index.vue'

describe('Documentation page', () => {
  // eslint-disable-next-line no-unused-expressions
  it('is a Vue instance', () => {
    const wrapper = shallowMount(DocsPage, {
      stubs: [
        'nuxt-link', 'bin-header', 'font-awesome-icon',
        'client-only', 'bin-footer'
      ]
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
