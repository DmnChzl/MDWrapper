import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { array, func } from 'prop-types';
import { MDCList } from '@material/list/dist/mdc.list';
import ListItem from './ListItem';
import '@material/list/dist/mdc.list.css';

const clearFix = {
  border: '1px solid rgba(0, 0, 0, 0.1)'
};

/**
 * MD Component: List
 *
 * @param {Array} data Data
 * @param {Function} onClick Click Trigger
 */
class List extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCList(this.mdList);
    this.mdComponent.singleSelection = true;
  }

  render() {
    const { data, onClick } = this.props;

    // Class(es)
    const mdcTwoLine = 'mdc-list--two-line';
    const mdcAvatarList = 'mdc-list--avatar-list';

    return (
      <ul
        ref={element => { this.mdList = element }}
        className={classNames('mdc-list',
          { [mdcTwoLine]: data.find(({ subTitle }) => subTitle) },
          { [mdcAvatarList]: data.find(({ leadingIcon, subTitle }) => leadingIcon && subTitle) })}
        role="listbox"
        style={clearFix}>
        {data.map(({ leadingIcon, title, subTitle, trailingIcon }, index) => (
          <ListItem
            key={index}
            leadingIcon={leadingIcon}
            title={title}
            subTitle={subTitle}
            trailingIcon={trailingIcon}
            onClick={onClick} />
        ))}
      </ul>
    );
  }
}

List.defaultProps = {
  data: [],
  onClick: () => {}
};

List.propTypes = {
  data: array,
  onClick: func
};

export default List;
