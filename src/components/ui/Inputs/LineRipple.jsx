import React, { PureComponent } from 'react';
import { MDCLineRipple } from '@material/line-ripple/dist/mdc.lineRipple';
import '@material/line-ripple/dist/mdc.line-ripple.css';

/**
 * MD Component: LineRipple
 */
class LineRipple extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCLineRipple(this.mdLineRipple);
  }

  render() {
    return (
      <div
        ref={element => { this.mdLineRipple = element }}
        className="mdc-line-ripple">
      </div>
    );
  }
}

export default LineRipple;
