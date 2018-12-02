import React from 'react';
import { mount } from 'enzyme';
import DialogContent from './DialogContent';

describe('DialogContent Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <DialogContent>
        Test
      </DialogContent>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    expect(wrapper.props().children).toHaveLength(4);
  });
});
