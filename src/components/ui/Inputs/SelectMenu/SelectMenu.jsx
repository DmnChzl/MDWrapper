import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { array, string, bool, func } from 'prop-types';
import { MDCSelect } from '@material/select/dist/mdc.select';
import FormField from '../FormField';
import FloatingLabel from '../FloatingLabel';
import LineRipple from '../LineRipple';
import NotchedOutline from '../NotchedOutline';
import SelectMenuIcon from './SelectMenuIcon';
import SelectMenuHelperText from './SelectMenuHelperText';
import '@material/select/dist/mdc.select.css';

/**
 * MD Component: SelectMenu
 *
 * @param {Array} data Data
 * @param {Boolean} disabled Available State
 * @param {String} helper Helper Text
 * @param {String} icon Material Design Icon
 * @param {String} label Label
 * @param {Function} onChange Change Trigger
 * @param {Boolean} outlined Outlined Style
 */
class SelectMenu extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCSelect(this.mdSelectMenu);
  }

  render() {
    const { data, disabled, helper, icon, label, onChange, outlined } = this.props;

    // Class(es)
    const mdcDisabled = 'mdc-select--disabled';
    const mdcOutlined = 'mdc-select--outlined';
    const mdcWithLeadingIcon = 'mdc-select--with-leading-icon';

    return (
      <FormField>
        <div
          ref={element => { this.mdSelectMenu = element }}
          className={classNames('mdc-select',
            { [mdcDisabled]: disabled },
            { [mdcOutlined]: outlined },
            { [mdcWithLeadingIcon]: icon })}>
          {icon &&
            <SelectMenuIcon font={icon} />}
          <i className="mdc-select__dropdown-icon"></i>
          <select
            className="mdc-select__native-control"
            onChange={e => onChange(e)}
            defaultValue=""
            disabled={disabled}>
            <option value="" disabled></option>
            {data.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
          {!outlined &&
            <>
              {label &&
                <FloatingLabel>{label}</FloatingLabel>}
              <LineRipple />
            </>}
          {outlined &&
            <NotchedOutline>
              {label &&
                <FloatingLabel>{label}</FloatingLabel>}
            </NotchedOutline>}
        </div>
        {helper &&
          <SelectMenuHelperText>{helper}</SelectMenuHelperText>}
      </FormField>
    );
  }
}

SelectMenu.defaultProps = {
  data: [],
  disabled: false,
  onChange: () => {},
  outlined: false
};

SelectMenu.propTypes = {
  data: array,
  disabled: bool,
  helper: string,
  icon: string,
  label: string,
  onChange: func,
  outlined: bool
};

export default SelectMenu;
