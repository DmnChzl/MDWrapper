import React, { PureComponent } from 'react';
import { node } from 'prop-types';
import { MDCTabBar } from '@material/tab-bar/dist/mdc.tabBar';
import '@material/tab-bar/dist/mdc.tab-bar.css';

/**
 * MD Component: TabBar
 *
 * @param {Object} children Node Content
 */
class TabBar extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCTabBar(this.mdTabBar);
  }

  render() {
    const { children } = this.props;

    return (
      <div
        ref={element => { this.mdTabBar = element }}
        className="mdc-tab-bar"
        role="tablist">
        {children}
      </div>
    );
  }
}

TabBar.propTypes = {
  children: node
};

export default TabBar;
