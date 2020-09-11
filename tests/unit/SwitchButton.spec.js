import { shallowMount } from '@vue/test-utils'
import SwitchButton from '@/components/SwitchButton.vue'

describe('SwitchButton.vue', () => {
  it('O componente SwitchButton foi renderizado corretamente.', () => {
    const wrapper = shallowMount(SwitchButton)
    expect(wrapper.find('#switch-button').exists()).toBe(true)
  })
})
