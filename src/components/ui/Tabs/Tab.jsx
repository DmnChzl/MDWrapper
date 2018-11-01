import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, node, string, func } from 'prop-types';
import { MDCTab } from '@material/tab/dist/mdc.tab';
import Icon from '../Icon';
import '@material/tab/dist/mdc.tab.css';

/**
 * MD Component: Tab
 * 
 * @param {Boolean} active Active
 * @param {Node} children Content
 * @param {String} icon Material Design Icon
 * @param {String} label Label
 * @param {Function} onClick Click Trigger
 * @param {Boolean} stacked Stacked Style
 */
class Tab extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCTab(this.mdTab);
  }

  render() {
    const { active, children, icon, label, onClick, stacked } = this.props;

    // Class(es)
    const mdcActive = 'mdc-tab--active';
    const mdcIcon = 'mdc-tab__icon';
    const mdcStacked = 'mdc-tab--stacked';

    return (
      <button
        ref={element => { this.mdTab = element }}
        className={classNames('mdc-tab',
          { [mdcActive]: active },
          { [mdcStacked]: stacked })}
        role="tab"
        aria-selected={active}
        onClick={() => onClick()}
        tabIndex={0}>
        <span className="mdc-tab__content">
          {icon &&
            <Icon classes={[mdcIcon]} font={icon} />}
          {label &&
            <span className="mdc-tab__text-label">{label}</span>}
        </span>
        {children}
        <span className="mdc-tab__ripple"></span>
      </button>
    );
  }
}

Tab.defaultProps = {
  active: false,
  onClick: () => {},
  stacked: false
};

Tab.propTypes = {
  active: bool,
  children: node,
  icon: string,
  label: string,
  onClick: func,
  stacked: bool
};

export default Tab;
