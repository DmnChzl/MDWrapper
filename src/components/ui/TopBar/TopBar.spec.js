import React from 'react';
import { mount } from 'enzyme';
import TopBar from './TopBar';

describe('TopBar Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TopBar>
        Test
      </TopBar>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      collapsed: true,
      short: true,
      title: 'Test'
    });

    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().collapsed).toBe(true);
    expect(wrapper.props().dense).toBe(false);
    expect(wrapper.props().fixed).toBeFalsy();
    expect(wrapper.props().prominent).toBe(false);
    expect(wrapper.props().short).toBe(true);
    expect(wrapper.props().title).toHaveLength(4);
  });

  it('Simulate Click Event', () => {
    let value = false;

    wrapper.setProps({
      onClick: () => {
        value = true
      }
    });

    wrapper.find('button').simulate('click');

    expect(value).toBe(true);
  });
});
