import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, string, func } from 'prop-types';
import { MDCSwitch } from '@material/switch/dist/mdc.switch';
import FormField from './FormField';
import '@material/switch/dist/mdc.switch.css';

const clearFix = {
  paddingLeft: 10
};

/**
 * MD Component: Switch
 *
 * @param {Boolean} checked Default Value
 * @param {Boolean} disabled Available State
 * @param {String} label Label
 * @param {Function} onChange Change Trigger
 */
class Switch extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCSwitch(this.mdSwitch);
  }

  /**
   * Generate ID For Input & Label
   * 
   * @param {String} base Whatever U Want
   */
  generateId = base => base.trim().toLowerCase();

  render() {
    const { checked, disabled, label, onChange } = this.props;

    // Class(es)
    const mdcDisabled = 'mdc-switch--disabled';

    // Attribute(s)
    const attrId = label ? { 'id': `${this.generateId(label)}` } : {};

    return (
      <FormField>
        <div
          ref={element => { this.mdSwitch = element }}
          className={classNames('mdc-switch',
            { [mdcDisabled]: disabled })}>
          <div className="mdc-switch__track"></div>
          <div className="mdc-switch__thumb-underlay">
            <div className="mdc-switch__thumb">
              <input
                className="mdc-switch__native-control"
                {...attrId}
                type="checkbox"
                defaultChecked={checked}
                onChange={e => onChange(e)}
                disabled={disabled}
                role="switch" />
            </div>
          </div>
        </div>
        {label &&
          <label style={clearFix} htmlFor={this.generateId(label)}>{label}</label>}
      </FormField>
    );
  }
}

Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {}
};

Switch.propTypes = {
  checked: bool,
  disabled: bool,
  label: string,
  onChange: func
};

export default Switch;
