import { shallowMount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {
  it('O componente Table foi renderizado corretamente.', () => {
    const wrapper = shallowMount(Table)
    expect(wrapper.find('#main-table').exists()).toBe(true)
  })
})
