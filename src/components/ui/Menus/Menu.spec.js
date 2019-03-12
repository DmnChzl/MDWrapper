import React from 'react';
import { mount } from 'enzyme';
import Menu from './Menu';

describe('Menu Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Menu />
    );
  });

  it('Renders', () => {
    // Mock
    document.body.innerHTML = `
      <div id="menu-anchor"></div>
    `;

    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      data: [
        'First',
        '',
        'Second'
      ],
      open: true
    });

    expect(wrapper.props().data).toHaveLength(3);
    expect(wrapper.props().open).toBe(true);
  });
});
