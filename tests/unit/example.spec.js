import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Showing the power of Travis CI/CD!';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    // ensure we find the msg in the full string returned HelloWorld
    expect(wrapper.text()).toMatch(new RegExp(msg));
  });
});
