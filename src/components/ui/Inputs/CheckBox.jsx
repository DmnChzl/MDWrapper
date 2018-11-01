import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, string, func } from 'prop-types';
import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox';
import FormField from './FormField';
import '@material/checkbox/dist/mdc.checkbox.css';

/**
 * MD Component: CheckBox
 *
 * @param {Boolean} checked Default Value
 * @param {Boolean} disabled Available State
 * @param {String} label Label
 * @param {Function} onChange Change Trigger
 */
class CheckBox extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCCheckbox(this.mdCheckBox);
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
    const mdcDisabled = 'mdc-checkbox--disabled';

    // Attribute(s)
    const attrId = label ? { 'id': `${this.generateId(label)}` } : {};

    return (
      <FormField>
        <div
          ref={element => { this.mdCheckBox = element }}
          className={classNames('mdc-checkbox',
            { [mdcDisabled]: disabled })}>
          <input
            className="mdc-checkbox__native-control"
            {...attrId}
            type="checkbox"
            defaultChecked={checked}
            onChange={e => onChange(e)}
            disabled={disabled} />
          <div className="mdc-checkbox__background">
            <svg
              className="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
              <path
                className="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div className="mdc-checkbox__mixedmark"></div>
          </div>
        </div>
        {label &&
          <label htmlFor={this.generateId(label)}>{label}</label>}
      </FormField>
    );
  }
}

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {}
};

CheckBox.propTypes = {
  checked: bool,
  disabled: bool,
  label: string,
  onChange: func
};

export default CheckBox;
