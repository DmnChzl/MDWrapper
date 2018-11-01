import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from './ThemeProvider';
import { BLACK, WHITE } from '../../constants';

const PRIMARY = '#3700b3';
const SECONDARY = '#03dac6';

describe('ThemeProvider Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider>
        Test
      </ThemeProvider>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      primary: PRIMARY,
      secondary: SECONDARY
    });

    expect(wrapper.props().background).toEqual(WHITE);
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().onPrimary).toEqual(WHITE);
    expect(wrapper.props().onSecondary).toEqual(BLACK);
    expect(wrapper.props().onSurface).toEqual(BLACK);
    expect(wrapper.props().primary).toEqual(PRIMARY);
    expect(wrapper.props().secondary).toEqual(SECONDARY);
    expect(wrapper.props().surface).toEqual(WHITE);
  });
});
