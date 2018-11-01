import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, string, func } from 'prop-types';
import { MDCIconToggle } from '@material/icon-toggle/dist/mdc.iconToggle';
import { STAR, STAR_BORDER } from '../../../constants';
import '@material/icon-toggle/dist/mdc.icon-toggle.css';

/**
 * MD Component: IconToggle
 *
 * @param {Boolean} disabled Available State
 * @param {String} fontOff Material Design Icon Font Off
 * @param {String} fontOn Material Design Icon Font On
 * @param {String} labelOff Label Off
 * @param {String} labelOn Label On
 * @param {Function} onClick Click Trigger
 */
class IconToggle extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCIconToggle(this.mdIconToggle);
  }

  render() {
    const { disabled, fontOff, fontOn, labelOff, labelOn, onClick } = this.props;

    // Class(es)
    const mdcDisabled = 'mdc-icon-toggle--disabled';

    // Attribute(s)
    const attrDataToggleOn = { 'data-toggle-on': `{ "label": "${labelOn}", "content": "${fontOn}" }` };
    const attrDataToggleOff = { 'data-toggle-off': `{ "label": "${labelOff}", "content": "${fontOff}" }` };
    const attrTabIndex = disabled ? { 'tab-index': '-1' } : { 'tab-index' : '0' };

    return (
      <i
        ref={element => { this.mdIconToggle = element }}
        className={classNames('material-icons', 
          'mdc-icon-toggle',
          { [mdcDisabled]: disabled })}
        role="button"
        aria-disabled={disabled}
        aria-label={labelOff}
        aria-pressed="false"
        {...attrDataToggleOn}
        {...attrDataToggleOff}
        onClick={() => onClick()}
        {...attrTabIndex}>
        {fontOff}
      </i>
    );
  }
}

IconToggle.defaultProps = {
  disabled: false,
  fontOff: STAR_BORDER,
  fontOn: STAR,
  labelOff: 'Off',
  labelOn: 'On',
  onClick: () => {}
};

IconToggle.propTypes = {
  disabled: bool,
  fontOff: string,
  fontOn: string,
  labelOff: string,
  labelOn: string,
  onClick: func
};

export default IconToggle;
