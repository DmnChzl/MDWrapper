import React, { PureComponent } from 'react';
import { MDCNotchedOutline } from '@material/notched-outline/dist/mdc.notchedOutline';
import '@material/notched-outline/dist/mdc.notched-outline.css';

/**
 * MD Component: NotchedOutline
 */
class NotchedOutline extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCNotchedOutline(this.mdNotchedOutline);
  }

  render() {
    return (
      <>
        <div
          ref={element => { this.mdNotchedOutline = element }}
          className="mdc-notched-outline">
          <svg>
            <path className="mdc-notched-outline__path" />
          </svg>
        </div>
        <div className="mdc-notched-outline__idle"></div>
      </>
    );
  }
}

export default NotchedOutline;
