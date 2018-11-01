import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, string, func } from 'prop-types';
import { MDCRadio } from '@material/radio/dist/mdc.radio';
import FormField from './FormField';
import '@material/radio/dist/mdc.radio.css';

/**
 * MD Component: Radio
 *
 * @param {Boolean} checked Default Value
 * @param {Boolean} disabled Available State
 * @param {String} label Label
 * @param {String} name Reference
 * @param {Function} onChange Change Trigger
 */
class Radio extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCRadio(this.mdRadio);
  }

  /**
   * Generate ID For Input & Label
   * 
   * @param {String} base Whatever U Want
   */
  generateId = base => base.trim().toLowerCase();

  render() {
    const { checked, disabled, label, name, onChange } = this.props;

    // Class(es)
    const mdcDisabled = 'mdc-radio--disabled';

    // Attribute(s)
    const attrId = label ? { 'id': `${this.generateId(label)}` } : {};

    return (
      <FormField>
        <div
          ref={element => { this.mdRadio = element }}
          className={classNames('mdc-radio',
            { [mdcDisabled]: disabled })}>
          <input
            className="mdc-radio__native-control"
            {...attrId}
            name={name}
            type="radio"
            defaultChecked={checked}
            onChange={e => onChange(e)}
            disabled={disabled} />
          <div className="mdc-radio__background">
            <div className="mdc-radio__outer-circle"></div>
            <div className="mdc-radio__inner-circle"></div>
          </div>
        </div>
        {label &&
          <label htmlFor={this.generateId(label)}>{label}</label>}
      </FormField>
    );
  }
}

Radio.defaultProps = {
  checked: false,
  disabled: false,
  name: 'default',
  onChange: () => {}
};

Radio.propTypes = {
  checked: bool,
  disabled: bool,
  label: string,
  name: string,
  onChange: func
};

export default Radio;
