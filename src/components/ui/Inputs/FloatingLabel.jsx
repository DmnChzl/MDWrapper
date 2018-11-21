import React, { PureComponent } from 'react';
import { node } from 'prop-types';
import { MDCFloatingLabel } from '@material/floating-label/dist/mdc.floatingLabel';
import '@material/floating-label/dist/mdc.floating-label.css';

/**
 * MD Component: FloatingLabel
 *
 * @param {Object} children Node Content
 */
class FloatingLabel extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCFloatingLabel(this.mdFloatingLabel);
  }

  render() {
    const { children } = this.props;

    return (
      <label
        ref={element => { this.mdFloatingLabel = element }}
        className="mdc-floating-label">
        {children}
      </label>
    );
  }
}

FloatingLabel.propTypes = {
  children: node
};

export default FloatingLabel;
