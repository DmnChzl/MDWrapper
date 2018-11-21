import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { node, bool, func, string } from 'prop-types';
import { MDCTopAppBar } from '@material/top-app-bar/dist/mdc.topAppBar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

/**
 * MD Component: TopBar
 * 
 * @param {Object} children Node Content
 * @param {Boolean} collapsed Always Short Style
 * @param {Boolean} dense Dense Style
 * @param {Boolean} fixed Fixed Style
 * @param {Function} onClick Click Trigger
 * @param {Boolean} prominent Prominent Style
 * @param {Boolean} short Short Style
 * @param {String} title Title
 */
class TopBar extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCTopAppBar(this.mdTopAppBar);
  }

  render() {
    const { children, collapsed, dense, fixed, onClick, prominent, short, title } = this.props;

    // Class(es)
    const mdcDense = 'mdc-top-app-bar--dense';
    const mdcFixed = 'mdc-top-app-bar--fixed';
    const mdcProminent = 'mdc-top-app-bar--prominent';
    const mdcShort = 'mdc-top-app-bar--short';
    const mdcShortCollapsed = 'mdc-top-app-bar--short-collapsed';

    return (
      <header
        ref={element => { this.mdTopAppBar = element }}
        className={classNames('mdc-top-app-bar',
          { [mdcDense]: dense },
          { [mdcFixed]: fixed },
          { [mdcProminent]: prominent },
          { [mdcShort]: short },
          { [mdcShortCollapsed]: short && collapsed })}>
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button className="material-icons mdc-top-app-bar__navigation-icon" onClick={() => onClick()}>menu</button>
            <span className="mdc-top-app-bar__title">{title}</span>
          </section>
          {children && <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            {children}
          </section>}
        </div>
      </header>
    );
  }
}

TopBar.defaultProps = {
  collapsed: false,
  dense: false,
  fixed: false,
  onClick: () => {},
  prominent: false,
  short: false,
  title: 'Default'
};

TopBar.propTypes = {
  children: node, 
  collapsed: bool,
  dense: bool,
  fixed: bool,
  onClick: func,
  prominent: bool,
  short: bool,
  title: string
};

export default TopBar;
