import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { MDCSelectIcon } from '@material/select/dist/mdc.select';
import { EVENT } from '../../../../constants';
import '@material/select/dist/mdc.select.css';

/**
 * MD Component: SelectMenuIcon
 * 
 * @param {String} font Material Design Icon Font
 */
class SelectMenuIcon extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCSelectIcon(this.mdSelectMenuIcon);
  }

  render() {
    const { font } = this.props;

    return (
      <i
        ref={element => { this.mdSelectMenuIcon = element }}
        className="material-icons mdc-select__icon"
        role="button"
        tabIndex={0}>
        {font}
      </i>
    );
  }
}

SelectMenuIcon.defaultProps = {
  font: EVENT
};

SelectMenuIcon.propTypes = {
  font: string
}

export default SelectMenuIcon;
