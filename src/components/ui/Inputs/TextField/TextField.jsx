import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, string, func } from 'prop-types';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield';
import FormField from '../FormField';
import FloatingLabel from '../FloatingLabel';
import LineRipple from '../LineRipple';
import NotchedOutline from '../NotchedOutline';
import TextFieldIcon from './TextFieldIcon';
import TextFieldHelperText from './TextFieldHelperText';
import '@material/textfield/dist/mdc.textfield.css';

const clearFix = {
  display: 'block'
};

/**
 * MD Component: TextField
 *
 * @param {Boolean} fullWidth Full Width Style
 * @param {Boolean} disabled Available State
 * @param {String} helper Helper Text
 * @param {String} icon Material Design Icon
 * @param {String} label Label
 * @param {Function} onChange Change Trigger
 * @param {Boolean} outlined Outlined Style
 * @param {String} placeholder Indicator Text
 * @param {Boolean} trailing Trailing
 */
class TextField extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCTextField(this.mdTextField);
  }

  render() {
    const { fullWidth, disabled, helper, icon, label, onChange, outlined, placeholder, trailing } = this.props;

    // Class(es)
    const mdcullWidth = 'mdc-text-field--fullwidth';
    const mdcDisabled = 'mdc-text-field--disabled';
    const mdcWithLeadingIcon = 'mdc-text-field--with-leading-icon';
    const mdcOutlined = 'mdc-text-field--outlined';
    const mdcWithTrailingIcon = 'mdc-text-field--with-trailing-icon';

    return (
      <FormField style={clearFix}>
        <label
          ref={element => { this.mdTextField = element }}
          className={classNames('mdc-text-field',
            { [mdcullWidth]: fullWidth },
            { [mdcDisabled]: disabled },
            { [mdcWithLeadingIcon]: icon && !trailing },
            { [mdcOutlined]: outlined },
            { [mdcWithTrailingIcon]: icon && trailing })}>
          {icon &&
            <TextFieldIcon icon={icon} />}
          <input
            className="mdc-text-field__input"
            type="text"
            placeholder={placeholder}
            onChange={e => onChange(e)}
            disabled={disabled} />
          {label &&
            <FloatingLabel>{label}</FloatingLabel>}
          {fullWidth &&
            <LineRipple />}
          {outlined &&
            <NotchedOutline />}
        </label>
        {helper &&
          <TextFieldHelperText>{helper}</TextFieldHelperText>}
      </FormField>
    );
  }
}

TextField.defaultProps = {
  fullWidth: false,
  disabled: false,
  onChange: () => {},
  outlined: false,
  placeholder: '',
  trailing: false
};

TextField.propTypes = {
  fullWidth: bool,
  disabled: bool,
  helper: string,
  icon: string,
  label: string,
  onChange: func,
  outlined: bool,
  placeholder: string,
  trailing: bool
};

export default TextField;
