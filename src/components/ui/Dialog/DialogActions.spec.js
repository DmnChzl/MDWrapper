import React from 'react';
import { mount } from 'enzyme';
import DialogActions from './DialogActions';

describe('DialogActions Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <DialogActions>
        Test
      </DialogActions>
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
