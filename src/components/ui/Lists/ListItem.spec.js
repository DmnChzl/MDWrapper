import React from 'react';
import { mount } from 'enzyme';
import ListItem from './ListItem';
import { FOLDER, INFO } from '../../../constants';

describe('ListItem Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ListItem />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Check Props', () => {
    wrapper.setProps({
      leadingIcon: FOLDER,
      title: 'Test',
      subTitle: 'Sub Test',
      trailingIcon: INFO
    });

    expect(wrapper.props().leadingIcon).toEqual(FOLDER);
    expect(wrapper.props().title).toHaveLength(4);
    expect(wrapper.props().subTitle).toHaveLength(8);
    expect(wrapper.props().trailingIcon).toEqual(INFO);
  });

  it('Simulate Click Event', () => {
    let value = false;

    wrapper.setProps({
      title: 'Test',
      onClick: () => {
        value = true;
      }
    });

    wrapper.find('li').simulate('click');

    expect(value).toBe(true);
  });
});
