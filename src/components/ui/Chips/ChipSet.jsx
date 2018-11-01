import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { node, bool } from 'prop-types';
import { MDCChipSet } from '@material/chips/dist/mdc.chips';
import '@material/chips/dist/mdc.chips.css';

/**
 * MD Component: ChipSet
 *
 * @param {Node} children Content
 * @param {Boolean} choice Choice Style
 */
class ChipSet extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCChipSet(this.mdChipSet);
  }

  render() {
    const { children, choice } = this.props;

    // Class(es)
    const mdcChoice = 'mdc-chip-set--choice';

    return (
      <div
        ref={element => { this.mdChipSet = element }}
        className={classNames('mdc-chip-set',
          { [mdcChoice]: choice })}>
        {children}
      </div>
    );
  }
}

ChipSet.defaultProps = {
  choice: false
};

ChipSet.propTypes = {
  children: node,
  choice: bool
};

export default ChipSet;
