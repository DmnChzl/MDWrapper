import React from 'react';
import { mount } from 'enzyme';
import List from './List';

describe('List Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <List />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Check Props', () => {
    wrapper.setProps({
      data: [
        {
          title: 'First',
          subTitle: 'Sub First'
        },
        '',
        {
          leadingIcon: 'folder',
          title: 'Second',
          subTitle: 'Sub Second'
        },
        '',
        {
          leadingIcon: 'folder',
          title: 'Three',
          subTitle: 'Sub Three',
          trailingIcon: 'info'
        }
      ]
    });

    expect(wrapper.props().data).toHaveLength(5);
  });
});
