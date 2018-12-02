import React from 'react';
import { mount } from 'enzyme';
import Dialog from './Dialog';

describe('Dialog Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Dialog>
        Test
      </Dialog>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      title: 'Test'
    });

    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().open).toBe(false);
    expect(wrapper.props().title).toHaveLength(4);
  });

  it('Update Hook', () => {
    wrapper.setProps({
      open: true
    });

    expect(wrapper.props().open).toBe(true);
  });
});
