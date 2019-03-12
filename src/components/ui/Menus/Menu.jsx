import React, { PureComponent } from 'react';
import { array, func, bool } from 'prop-types';
import { MDCMenu } from '@material/menu/dist/mdc.menu';
import MenuItem from './MenuItem';
import '@material/list/dist/mdc.list.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/menu/dist/mdc.menu.css';

/**
 * MD Component: Menu
 *
 * @param {Array} data Data
 * @param {Function} onClick Click Trigger
 * @param {Boolean} open Open
 */
class Menu extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCMenu(this.mdMenu);
    this.setAnchorMenu();
  }

  componentDidUpdate() {
    const { open } = this.props;

    this.mdComponent.open = open;
  }

  setAnchorMenu = () => {
    const anchorMenu = document.getElementById('menu-anchor');

    if (anchorMenu) {
      const anchorMenuRect = anchorMenu.getBoundingClientRect();
      this.mdComponent.setAbsolutePosition(anchorMenuRect.x, anchorMenuRect.y);
    }
  }

  render() {
    const { data, onClick } = this.props;

    return (
      <div
        ref={element => { this.mdMenu = element }}
        className="mdc-menu mdc-menu-surface">
        <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
          {data.map((label, index) => (
            <MenuItem
              key={index}
              label={label}
              onClick={onClick} />
          ))}
        </ul>
      </div>
    );
  }
}

Menu.defaultProps = {
  data: [],
  onClick: () => {},
  open: false
};

Menu.propTypes = {
  data: array,
  onClick: func,
  open: bool
};

export default Menu;
