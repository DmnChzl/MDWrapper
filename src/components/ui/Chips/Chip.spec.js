import React from 'react';
import { mount } from 'enzyme';
import Chip from './Chip';
import { DONE } from '../../../constants';

describe('Chip Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Chip>
        Test
      </Chip>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  describe('Check Props', () => {
    it('Return Default', () => {
      expect(wrapper.props().children).toHaveLength(4);
    });


    it('Return Leading', () => {
      wrapper.setProps({
        icon: DONE
      });
  
      expect(wrapper.props().icon).toEqual(DONE);
    });

    it('Return Trailing', () => {
      wrapper.setProps({
        icon: DONE,
        onClick: () => {
          console.log('Test');
        }
      });
  
      expect(wrapper.props().icon).toEqual(DONE);
      expect(wrapper.props().onClick).toBeDefined();
    });
  });
});
