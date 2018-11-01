import React, { PureComponent } from 'react';
import { node } from 'prop-types';
import { MDCTabScroller } from '@material/tab-scroller/dist/mdc.tabScroller';
import '@material/tab-scroller/dist/mdc.tab-scroller.css';

/**
 * MD Component: TabScroller
 * 
 * @param {Node} children Content
 */
class TabScroller extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCTabScroller(this.mdTabScroller);
  }

  render() {
    const { children } = this.props;

    return (
      <div
        ref={element => { this.mdTabScroller = element }}
        className="mdc-tab-scroller">
        <div className="mdc-tab-scroller__scroll-area">
          <div className="mdc-tab-scroller__scroll-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

TabScroller.propTypes = {
  children: node
};

export default TabScroller;
