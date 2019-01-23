import React, { PureComponent } from 'react';
import { node } from 'prop-types';
import { MDCSelectHelperText } from '@material/select/dist/mdc.select';
import '@material/select/dist/mdc.select.css';

/**
 * MD Component: SelectMenuHelperText
 *
 * @param {Object} children Node Content
 */
class SelectMenuHelperText extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCSelectHelperText(this.mdSelectMenuHelperText);
  }

  render() {
    const { children } = this.props;

    return (
      <p
        ref={element => { this.mdSelectMenuHelperText = element }}
        className="mdc-select-helper-text"
        aria-hidden="true">
        {children}
      </p>
    );
  }
}

SelectMenuHelperText.propTypes = {
  children: node
};

export default SelectMenuHelperText;
