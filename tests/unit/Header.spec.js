import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('O Header foi renderizado corretamente.', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('#main-header').exists()).toBe(true)
  })
})
