import React, { PureComponent } from 'react';
import { node } from 'prop-types';
import { MDCTextFieldHelperText } from '@material/textfield/dist/mdc.textfield';
import '@material/textfield/dist/mdc.textfield.css';

/**
 * MD Component: TextFieldHelperText
 *
 * @param {Node} children Content
 */
class TextFieldHelperText extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCTextFieldHelperText(this.mdTextFieldHelperText);
  }

  render() {
    const { children } = this.props;

    return (
      <p
        ref={element => { this.mdTextFieldHelperText = element }}
        className="mdc-text-field-helper-text"
        aria-hidden="true">
        {children}
      </p>
    );
  }
}

TextFieldHelperText.propTypes = {
  children: node
};

export default TextFieldHelperText;
