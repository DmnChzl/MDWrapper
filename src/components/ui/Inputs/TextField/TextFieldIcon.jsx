import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { MDCTextFieldIcon } from '@material/textfield/dist/mdc.textfield';
import { TEXT_FORMAT } from '../../../../constants';
import '@material/textfield/dist/mdc.textfield.css';

/**
 * MD Component: TextFieldIcon
 * 
 * @param {String} font Material Design Icon Font
 */
class TextFieldIcon extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCTextFieldIcon(this.mdTextFieldIcon);
  }

  render() {
    const { font } = this.props;

    return (
      <i
        ref={element => { this.mdTextFieldIcon = element }}
        className="material-icons mdc-text-field__icon"
        role="button"
        tabIndex={0}>
        {font}
      </i>
    );
  }
}

TextFieldIcon.defaultProps = {
  font: TEXT_FORMAT
};

TextFieldIcon.propTypes = {
  font: string
}

export default TextFieldIcon;
