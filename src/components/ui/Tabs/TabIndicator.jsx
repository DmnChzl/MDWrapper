import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool } from 'prop-types';
import { MDCTabIndicator } from '@material/tab-indicator/dist/mdc.tabIndicator';
import '@material/tab-indicator/dist/mdc.tab-indicator.css';

/**
 * MD Component: TabIndicator
 * 
 * @param {Boolean} active Active
 * @param {Boolean} underline Underline 
 */
class TabIndicator extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCTabIndicator(this.mdTabIndicator);
  }

  render() {
    const { active, underline } = this.props;

    // Class(es)
    const mdcActive = 'mdc-tab-indicator--active';
    const mdcContentUnderline = 'mdc-tab-indicator__content--underline';

    return (
      <span
        ref={element => { this.mdTabIndicator = element }}
        className={classNames('mdc-tab-indicator',
          { [mdcActive]: active })}>
        <span
          className={classNames('mdc-tab-indicator__content',
            { [mdcContentUnderline]: underline })}>
        </span>
      </span>
    );
  }
}

TabIndicator.defaultProps = {
  active: false,
  underline: false
};

TabIndicator.propTypes = {
  active: bool,
  underline: bool
};

export default TabIndicator;
