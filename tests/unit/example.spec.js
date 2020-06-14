import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Showing the power of Travis CI/CD!'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    //expect(wrapper.text()).toMatch(msg)
    //expect(wrapper.text()).toMatch(/(msg)/i)
    expect(wrapper.text()).stringContaining(msg)
  })
})
