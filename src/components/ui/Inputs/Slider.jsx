import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, number, func } from 'prop-types';
import { MDCSlider } from '@material/slider/dist/mdc.slider';
import '@material/slider/dist/mdc.slider.css';

/**
 * MD Component: Slider
 *
 * @param {Boolean} disabled Available State
 * @param {Boolean} discrete Discrete Style
 * @param {Boolean} displayMarkers Display Markers Style
 * @param {Number} max Max Value
 * @param {Number} min Min Value
 * @param {Function} onChange Change Trigger
 * @param {Number} step Step Value
 * @param {Number} value Default Value
 */
class Slider extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCSlider(this.mdSlider);
    this.mdComponent.listen('MDCSlider:change', this.handleChange);

    this.clearFix();
  }

  clearFix = () => {
    const style = getComputedStyle(this.mdTrackContainer);
    const color = style.getPropertyValue('--mdc-theme-secondary');
    this.mdTrackContainer.style['background-color'] = `${color}40`; // Opacity: 25%
  }

  handleChange = () => {
    const { onChange } = this.props;

    onChange(this.mdComponent.value);
  }

  render() {
    const { disabled, discrete, displayMarkers, max, min, step, value } = this.props;

    // Class(es)
    const mdcDiscrete = 'mdc-slider--discrete';
    const mdcDisplayMarkers = 'mdc-slider--display-markers';

    // Attribute(s)
    const attrAriaValueNow = { 'aria-valuenow': `${value ? value : (min + max) / 2}` };

    return (
      <div
        ref={element => { this.mdSlider = element }}
        className={classNames('mdc-slider',
          { [mdcDiscrete]: discrete },
          { [mdcDisplayMarkers]: discrete && displayMarkers })}
        role="slider"
        data-step={step}
        aria-valuemax={max}
        aria-valuemin={min}
        {...attrAriaValueNow}
        tabIndex={0}
        aria-disabled={disabled}>
        <div
          ref={element => { this.mdTrackContainer = element }}
          className="mdc-slider__track-container">
          <div className="mdc-slider__track"></div>
          {discrete && displayMarkers &&
            <div className="mdc-slider__track-marker-container"></div>}
        </div>
        <div className="mdc-slider__thumb-container">
          {discrete &&
            <div className="mdc-slider__pin">
              <span className="mdc-slider__pin-value-marker"></span>
            </div>}
          <svg className="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
          <div className="mdc-slider__focus-ring"></div>
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  disabled: false,
  discrete: false,
  displayMarkers: false,
  max: 100,
  min: 0,
  onChange: () => {},
  step: 1
};

Slider.propTypes = {
  disabled: bool,
  discrete: bool,
  displayMarkers: bool,
  max: number,
  min: number,
  onChange: func,
  step: number,
  value: number
};

export default Slider;
